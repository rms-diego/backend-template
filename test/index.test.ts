import { describe, test, beforeEach, expect } from "vitest";
import supertest from "supertest";
import { app } from "@/app";

describe("GET / - Health check test cases", () => {
  const request = supertest(app.server);

  beforeEach(async () => {
    app.ready();
  });

  test("it should be able to get health check message", async () => {
    const { body } = await request.get("/").expect(200);
    expect(body).toEqual({ message: "server is running" });
  });
});
