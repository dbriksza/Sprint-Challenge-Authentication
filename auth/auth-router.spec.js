const request = require("supertest");

const server = require("../api/server");

describe("server", function() {
  describe("GET /api/jokes", function() {
    it("should return 400 no credentials provided", function() {
      return request(server)
        .get("/api/jokes")
        .then(res => {
          expect(res.status).toBe(400);
        });
    });
  });
  describe("GET /api/jokes", function() {
    it("should returnJSON formatted response", function() {
      return request(server)
        .get("/api/jokes")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
  describe("GET /api/auth/login", function() {
    it("should return 500 with no credentials", function() {
      return request(server)
        .post("/api/auth/login")
        .then(res => {
          expect(res.status).toBe(500);
        });
    });
  });
  describe("GET /auth/login", function() {
    it("should returnJSON formatted response", function() {
      return request(server)
        .post("/api/auth/login")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
  describe("GET /api/auth/register", function() {
    it("should return 400 invalid user info", function() {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.status).toBe(400);
        });
    });
  });
  describe("GET /api/auth/register", function() {
    it("should returnJSON formatted response", function() {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});
