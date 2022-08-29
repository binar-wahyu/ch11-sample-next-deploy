describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "tentang-kami" and click it
    cy.get('a[href*="tentang-kami"]').click();

    // The new url should include "/tentang-kami"
    cy.url().should("include", "/tentang-kami");

    // The new page should contain an h1 with "About page"
    cy.get("h1").contains("Tentang Kami");
  });
});
