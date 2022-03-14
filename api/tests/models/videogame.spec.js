const { Videogame, conn } = require("../../src/db.js");
const { expect } = require("chai");

const vgCompl = {
  name: "Cristian GAME",
  description: "Descripcion de ejemplo",
  platforms: ["PC", "Android"],
};
const vgName = {
  name: null,
  description: "Descripcion de ejemplo",
  platforms: ["PC", "Android"],
};
const vgDescr = {
  name: "Cristian GAME",
  description: null,
  platforms: ["PC", "Android"],
};
const vgPlat = {
  name: "Cristian GAME",
  description: "Descripcion de ejemplo",
  platforms: null,
};

describe("***MODELO VIDEOGAME***", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe("name", () => {
      it("deberia mostrar un error si name es null", (done) => {
        Videogame.create(vgName)
          .then(() => done(new Error("Se requiere un name valido")))
          .catch(() => done());
      });
      it("debería funcionar cuando es un name valido", () => {
        Videogame.create(vgCompl);
      });
    });
    describe("description", () => {
      it("deberia mostrar un error si description es null", (done) => {
        Videogame.create(vgDescr)
          .then(() => done(new Error("Se requiere una description valida")))
          .catch(() => done());
      });
      it("debería funcionar cuando es una description valida", () => {
        Videogame.create(vgCompl);
      });
    });
    describe("platforms", () => {
      it("deberia mostrar un error si platforms es null", (done) => {
        Videogame.create(vgPlat)
          .then(() => done(new Error("Se requieren platforms validas")))
          .catch(() => done());
      });
      it("debería funcionar cuando son platforms validas", () => {
        Videogame.create(vgCompl);
      });
    });
  });
});
