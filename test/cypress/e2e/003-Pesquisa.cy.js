describe("RF 3.3: Módulo Pesquisa de Pokémon", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Pesquisa por Nome", () => {
    cy.get("._searchInput_1lcp8_1").type("pikachu");
    cy.get("._lupa_1adnr_1").click();

    cy.get("h3").should("be.visible").should("have.text", "pikachu");
  });
  it("Pesquisa por ID", () => {
    cy.get("._searchInput_1lcp8_1").type("6");
    cy.get("._lupa_1adnr_1").click();

    cy.get("h3").should("be.visible").should("have.text", "charizard");
  });

  it("Pesquisa campo vazio", () => {
    cy.get("._searchInput_1lcp8_1").type("6");
    cy.get("._lupa_1adnr_1").click();

    cy.get("h3").should("be.visible").should("have.text", "charizard");

    cy.get("._searchInput_1lcp8_1").clear();
    cy.get("._lupa_1adnr_1").click();

    cy.get("._pokemonContainer_857m2_12 > *")
      .should("have.length", 20)
      .each((pokemon) => {
        cy.wrap(pokemon).should("be.visible");
      });
  });
});
