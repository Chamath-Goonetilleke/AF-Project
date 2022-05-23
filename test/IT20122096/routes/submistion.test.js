const { Submision } = require("../../../models/IT20122096/Submistions");
const request = require("supertest");

let server;

describe("/api/submision", () => {
  beforeEach(() => {
    server = require("../../../index");
  });
  afterEach(async () => {
    await server.close();
    await Submision.deleteMany({});
  });

  describe("GET/", () => {
    it("should return 200 if all submisions return successfullt", async () => {
      const submisions = [{ name: "Presentation" }, { name: "Report" }];
      await Submision.collection.insertMany(submisions);

      const res = await request(server).get("/api/submision");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
    });
    it("should return 400 if submisions not return successfullt", async () => {  
      const res = await request(server).get("/api/submision");

      expect(res.status).toBe(400);
    });
  });
  describe('POST/', () => {
    let name;

    const exec = async () => {
      return await request(server).post("/api/submision").send(name);
    }

    it('should return 200 if successfully created', async() => {
      name = {
        name:"Presentaion"
      }
      const res = await exec();
      expect(res.status).toBe(200)
    });
    it("should return 400 if name not given", async () => {
      name = {};
      const res = await exec();
      expect(res.status).toBe(400);
    });

  });
});
