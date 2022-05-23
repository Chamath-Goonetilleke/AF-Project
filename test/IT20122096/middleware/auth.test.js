const mongoose = require("mongoose");
const auth = require("../../../middleware/auth");
const { User } = require("../../../models/IT20122096/User");

describe("Authorization Middleware", () => {
  it("should give user with the payload of a valid token", () => {
    const user = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      userRole: "Student",
      userId: "1",
      email: "chamathkavvindya@gmail.com",
      name: "chamath",
    };
    const token = new User(user).generateAuthToken();
    const req = {
      header: jest.fn().mockReturnValue(token),
    };
    const res = {};
    const next = jest.fn();

    auth(req, res, next);

    expect(req.user).toMatchObject(user);
  });
});
