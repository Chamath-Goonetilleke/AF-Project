const request = require("supertest");
const { Template } = require("../../../models/IT20122096/Templates");

let server;
describe("/api/template", () => {
  beforeEach(() => {
    server = require("../../../index");
  });
  afterEach(async () => {
    await server.close();
    await Template.deleteMany({});
    jest.setTimeout(10000);
  });

  describe("GET/", () => {
    it("should return all templates", async () => {
      const templates = [
        {
          type: "Presentaion",
          file: "http://presentaion.pptx",
        },
        {
          type: "Presentaion2",
          file: "http://presentaion2.pptx",
        },
      ];
      await Template.collection.insertMany(templates);
      const res = await request(server).get("/api/template");

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
    });
    it("should return 400 if no templates found", async () => {
      const res = await request(server).get("/api/template");

      expect(res.status).toBe(400);
    });
  });
  describe('DELETE', () => { 
    it("should return 200 if template deleted successfully", async () => {
      const template = {
        type: "Presentaion",
        file: "http://presentaion.pptx",
      };
      const newTemplate = new Template(template);
      await newTemplate.save();

      const res = await request(server).delete(`/api/template/${newTemplate._id}`);

      expect(res.status).toBe(200);

    })
    it("should return 400 if no template found for given id", async () => {

      const id = "627fd64293fc1ca85ec445a1";

      const res = await request(server).delete(
        `/api/template/${id}`
      );

      expect(res.status).toBe(400);
    })

   })
});
