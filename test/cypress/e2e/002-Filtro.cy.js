describe("RF 3.2 Módulo Seleção de Tipo de Pokémon", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Filtro tipo (Normal)", () => {
    cy.get("._filterContainer_v8tvo_1 > img").click();
    cy.get("._buttonContainer_7jeye_27 > :nth-child(1)").click();
    cy.get("#tittle").should("have.text", "NextDex");
    cy.get("._pokemonContainer_857m2_12 > *")
      .should("have.length", 5)
      .each((pokemon) => {
        cy.wrap(pokemon).should("be.visible").should("contain", "Normal");
      });
  });
  it("Filtro tipo (Fire)", () => {
    cy.get("._filterContainer_v8tvo_1 > img").click();
    cy.get("._buttonContainer_7jeye_27 > :nth-child(2)").click();
    cy.get("#tittle").should("have.text", "NextDex");
    cy.get("._pokemonContainer_857m2_12 > *")
      .should("have.length", 3)
      .each((pokemon) => {
        cy.wrap(pokemon).should("be.visible").should("contain", "Fire");
      });
  });
  it("Filtro tipo (Grass)", () => {
    cy.get("._filterContainer_v8tvo_1 > img").click();
    cy.get("._buttonContainer_7jeye_27 > :nth-child(3)").click();
    cy.get("#tittle").should("have.text", "NextDex");
    cy.get("._pokemonContainer_857m2_12 > *")
      .should("have.length", 3)
      .each((pokemon) => {
        cy.wrap(pokemon).should("be.visible").should("contain", "Grass");
      });
  });
  it("Filtro tipo (Water)", () => {
    cy.get("._filterContainer_v8tvo_1 > img").click();
    cy.get("._buttonContainer_7jeye_27 > :nth-child(4)").click();
    cy.get("#tittle").should("have.text", "NextDex");
    cy.get("._pokemonContainer_857m2_12 > *")
      .should("have.length", 3)
      .each((pokemon) => {
        cy.wrap(pokemon).should("be.visible").should("contain", "Water");
      });
  });
  it("Filtro tipo (Flying)", () => {
    cy.get("._filterContainer_v8tvo_1 > img").click();
    cy.get("._buttonContainer_7jeye_27 > :nth-child(5)").click();
    cy.get("#tittle").should("have.text", "NextDex");
    cy.get("._pokemonContainer_857m2_12 > *")
      .should("have.length", 5)
      .each((pokemon) => {
        cy.wrap(pokemon).should("be.visible").should("contain", "Flying");
      });
  });
  it("Filtro tipo (Bug)", () => {
    cy.get("._filterContainer_v8tvo_1 > img").click();
    cy.get("._buttonContainer_7jeye_27 > :nth-child(6)").click();
    cy.get("#tittle").should("have.text", "NextDex");
    cy.get("._pokemonContainer_857m2_12 > *")
      .should("have.length", 6)
      .each((pokemon) => {
        cy.wrap(pokemon).should("be.visible").should("contain", "Bug");
      });
  });
});
