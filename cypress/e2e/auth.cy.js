Cypress.Cookies.debug(true);

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/tentang-kami");

    cy.get('a[href*="login"]').click();

    cy.url().should("include", "/login");

    cy.get("h1").contains("Login");
  });

  it("should navigate to the login page", () => {
    cy.get("input[name=username]").type("abcdef");
    cy.get("input[name=password]").type("abcdef{enter}");

    cy.url().should("include", "error=CredentialsSignin");
    cy.get(".alert").should("have.text", "Username atau Password salah!");
  });

  it("submit form with correct data", () => {
    cy.get("input[name=username]").type("sabrina01");
    cy.get("input[name=password]").type("selaluberbinar");
    cy.get("form").submit();

    cy.url().should("include", "/tentang-kami");
  });
});
