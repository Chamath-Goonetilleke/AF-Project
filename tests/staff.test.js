const request = require("supertest");

let server = require("../index");

describe("Test the get methods", () => {
  test("Test 1 - It should return Ok http status", async () => {
    const response = await request(server).get(
      "/staff/topics/626aef1fa90ad257f764192f"
    );
    expect(response.statusCode).toBe(500);
  });

  test("Test 2 - It should return Ok http status", async () => {
    const response = await request(server).get(
      "/staff/requests/626aef1fa90ad257f764192f"
    );
    expect(response.statusCode).toBe(500);
  });

  test("Test 3 - It should return Ok http status", async () => {
    const response = await request(server).get(
      "/staff/submissions/SE3030_GRP_82"
    );
    expect(response.statusCode).toBe(500);
  });

  test("Test 4 - It should return Ok http status", async () => {
    const response = await request(server).get("/staff/markings");
    expect(response.statusCode).toBe(200);
  });

  test("Test 5 - It should return Ok http status", async () => {
    const response = await request(server).get(
      "/staff/markings/627fd62593fc1ca85ec4459f"
    );
    expect(response.statusCode).toBe(500);
  });
});

describe("Test the put methods", () => {
  test("Test 1 - It should return Ok http status", async () => {
    const response = await request(server).put(
      "/staff/requests/accept/6285543cc8ad2f2e58cb06db"
    );
    expect(response.statusCode).toBe(500);
  });

  test("Test 2 - It should return Ok http status", async () => {
    const response = await request(server).put(
      "/staff/requests/decline/6285543cc8ad2f2e58cb06db"
    );
    expect(response.statusCode).toBe(500);
  });
});
