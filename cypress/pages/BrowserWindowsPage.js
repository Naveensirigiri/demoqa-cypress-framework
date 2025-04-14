class BrowserWindowsPage {

    // Page Elements
    browserWindowAddress = '/browser-windows';
    newTabButton = '#tabButton';
    newWindownButton = '#windowButton';
    newWindowMsgButton = '#messageWindowButton';


    // Page Methods
    visit() {
      cy.visit(this.browserWindowAddress);
    }
  
    clickNewTab() {
      cy.get(this.newTabButton).invoke('removeAttr', 'target').click();
    }
  
    verifyTabContent() {
      cy.url().should('include', '/sample');
      cy.get('#sampleHeading').should('contain', 'This is a sample page');
    }
  
    clickNewWindow() {
      cy.window(this.newWindownButton).then(win => {
        cy.stub(win, 'open').as('windowStub');
      });
      cy.get().click();
      cy.get('@windowStub').should('be.called');
    }

    clickNewWindowMessage() {
        cy.get(this.newWindowMsgButton).click();
      }

  }
  export default BrowserWindowsPage;