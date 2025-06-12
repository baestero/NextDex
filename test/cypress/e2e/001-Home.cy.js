describe("Exibição Inicial de Pokémon (Home)", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Ao carregar a página, a NextDex deve exibir os 20 primeiros Pokémon da primeira geração, obtidos da PokeAPI", () => {
    cy.get("#tittle").should("have.text", "NextDex");
    cy.get("._pokemonContainer_857m2_12 > *")
      .should("have.length", 20)
      .each((pokemon) => {
        cy.wrap(pokemon).should("be.visible");
      });
  });
});
