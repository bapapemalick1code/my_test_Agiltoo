class LoginPage {
    visit() {
      cy.visit('/login'); // Navigue vers la page de connexion
    }
  
    getUsernameField() {
      return cy.get('#username'); // Sélecteur pour le champ nom d'utilisateur
    }
  
    getPasswordField() {
      return cy.get('#password'); // Sélecteur pour le champ mot de passe
    }
  
    getSubmitButton() {
      return cy.get('button[type="submit"]'); // Sélecteur pour le bouton de soumission
    }
  
    getErrorMessage() {
      return cy.get('.error-message'); // Sélecteur pour le message d'erreur
    }
  
    fillUsername(username) {
      this.getUsernameField().type(username); // Remplit le champ nom d'utilisateur
    }
  
    fillPassword(password) {
      this.getPasswordField().type(password); // Remplit le champ mot de passe
    }
  
    submit() {
      this.getSubmitButton().click(); // Clique sur le bouton de soumission
    }
  
    checkErrorMessage(expectedMessage) {
      this.getErrorMessage().should('contain', expectedMessage); // Vérifie le message d'erreur
    }
  }
  
  export default LoginPage;