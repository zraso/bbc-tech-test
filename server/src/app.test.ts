import request from "supertest";
import app from "./app";
import dataAccessObject from "./libs/dataAccessObject";

beforeAll(() => {
  const mockDate = new Date("2022-01-01");
  jest.useFakeTimers("modern");
  jest.setSystemTime(mockDate);
});

beforeEach(() => {
  dataAccessObject.reset();
});

afterAll(() => {
  jest.useRealTimers();
});

describe("GET /countries", () => {
  it("should fetch data", async () => {
    const res = await request(app).get("/countries").send({
      // request body
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      // expected response
    });
  });

  it("should return 400 error", async () => {
    // error test

    expect(res.statusCode).toEqual(400);
  });
});
