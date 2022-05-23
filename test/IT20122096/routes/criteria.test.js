const { Criterias } = require("../../../models/IT20122096/Criterias");
const request = require("supertest");

let server;
describe("/api/criteria", () => {
  beforeEach(() => {
    (server = require("../../../index"))
    
  });
  afterEach(async () => {
    await server.close();
    await Criterias.deleteMany({});
    jest.setTimeout(10000);
  });

  describe("GET/", () => {
    it("should return criterias by id", async () => {
      const id = "627fd64293fc1ca85ec445a1";
      const criterias = [
        {
          name: "criteria1",
          value: 10,
          markingRubrikId: id,
        },
        {
          name: "criteria2",
          value: 10,
          markingRubrikId: id,
        },
      ];
      await Criterias.collection.insertMany(criterias);

      const res = await request(server).get(`/api/criteria/${id}`);

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
    });
    it("should return 400 in criterias not found", async () => {
      const id = "627fd64293fc1ca85ec445a2";
      const res = await request(server).get(`/api/criteria/${id}`);

      expect(res.status).toBe(400);
    });
  });

  describe("POST/", () => {
    let criteria;


    const exec = async () => {
      return await request(server).post("/api/criteria").send(criteria);
    };

    beforeEach(() => {
   
      criteria = {
        name: "criteria1",
        value: 10,
        markingRubrikId: "627fd64293fc1ca85ec445a1",
      };
    });
    it("should save the critera if it is valid", async () => {
      await exec();

      const critera = await Criterias.find({
        markingRubrikId: "627fd64293fc1ca85ec445a1",
      });

      expect(critera).not.toBeNull();
    });
    it("should return 400 in marking id not provided", async () => {
      criteria = {
        name: "criteria1",
        value: 10,
        
      };
      const res = await exec();

      expect(res.status).toBe(400);
    });
  });
});
