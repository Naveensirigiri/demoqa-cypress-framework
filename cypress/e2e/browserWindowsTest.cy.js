import BrowserWindowsPage from '../pages/BrowserWindowsPage';

describe('Browser Windows Page Tests', () => {
  const browsPage = new BrowserWindowsPage();
  beforeEach(() => {
    browsPage.visit();
  });

  it('opens new tab and verifies content', () => {
    browsPage.clickNewTab();
    browsPage.verifyTabContent();
  });

  it('opens new window', () => {
    browsPage.clickNewWindow();
  });


  it('should open a new window message and verify it', () => {
    // Limitation with Cypress doesn't support multiple native windows 
    browsPage.clickNewWindowMessage();
    cy.get('@windowOpen').should('be.calledWithMatch', ''); // URL contains /sample
  });

});