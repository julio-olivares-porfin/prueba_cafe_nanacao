const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  describe("ruta GET", () => {
    it("ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto.", async () => {
      const response = await request(server).get("/cafes");
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("ruta DELETE", () => {
    it("se obtiene un código 404 al intentar eliminar un café con un id que no existe.", async () => {
      const jwt = "token";
      const idProductoNoExiste = "6";
      const { statusCode } = await request(server)
        .delete(`/cafes/${idProductoNoExiste}`)
        .set("Authorization", jwt)
        .send();
      expect(statusCode).toBe(404);
    });
  });

  describe("ruta POST", () => {
    it("ruta POST /cafes agrega un nuevo café y devuelve un código 201.", async () => {
      const id = Math.floor(Math.random() * 999);
      const postCafe = { id, nombre: "Cafe nuevo" };
      const response = await request(server).post("/cafes").send(postCafe);
      expect(response.body).toContainEqual(postCafe);
      expect(response.status).toBe(201);
    });
  });

  describe("ruta PUT", () => {
    it("ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload.", async () => {
      const putCafe = { id: 4, nombre: "Cafe Actualizado" };
      const response = await request(server).put("/cafes/1").send(putCafe);
      expect(response.status).toBe(400);
    });
  });
});