//NOT WORKING RIGHT NOW
//FIXME: https://jaygould.co.uk/2020-07-28-jest-sequelize-testing-dedicated-database/
//FIXME: https://www.makeuseof.com/express-apis-jest-test/

// const request = require("supertest");
// const baseURL = "http://localhost:3001";
// const crypto = require("crypto");

// describe("GET /todos", () => {
//   const newTodo = {
//     id: crypto.randomUUID(),
//     item: "Drink water",
//     completed: false,
//   };
//   beforeAll(async () => {
//     // set up the todo
//     await request(baseURL).post("/todo").send(newTodo);
//   });
//   afterAll(async () => {
//     await request(baseURL).delete(`/todo/${newTodo.id}`);
//   });
//   it("should return 200", async () => {
//     const response = await request(baseURL).get("/todos");
//     expect(response.statusCode).toBe(200);
//     expect(response.body.error).toBe(null);
//   });
//   it("should return todos", async () => {
//     const response = await request(baseURL).get("/todos");
//     expect(response.body.data.length >= 1).toBe(true);
//   });
// });

describe("Initial test", () => {
  it("1+1=2", () => {
    expect(1 + 1).toEqual(2);
  });
});
