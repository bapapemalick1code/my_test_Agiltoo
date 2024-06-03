import LoginPage from '../pageObjects/loginPage';

describe('Login Functionality Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit(); // Navigue vers la page de connexion avant chaque test
  });

  it('should display an error message for invalid login', () => {
    loginPage.fillUsername('invalidUser');
    loginPage.fillPassword('invalidPassword');
    loginPage.submit();
    loginPage.checkErrorMessage('Invalid username or password'); // Vérifie le message d'erreur attendu
  });

  it('should successfully log in with valid credentials', () => {
    loginPage.fillUsername('validUser');
    loginPage.fillPassword('validPassword');
    loginPage.submit();
    // Ajouter des assertions pour vérifier que l'utilisateur est connecté, par exemple:
    cy.url().should('include', '/dashboard'); // Vérifie que l'URL inclut /dashboard
  });
});