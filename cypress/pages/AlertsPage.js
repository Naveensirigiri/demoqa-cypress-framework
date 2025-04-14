class AlertsPage {

    // Page Elements
    alertsPageAddress = '/alerts';


    // Page Methods
    visit() {
      cy.visit(this.alertsPageAddress);
    }
  
    triggerAlert() {
      cy.get('#alertButton').click();
    }
  
    stubAlert(expectedText) {
      cy.window().then(win => {
        cy.stub(win, 'alert').as('alertStub');
      });
    }
  
    verifyAlertCall(expectedText) {
      cy.get('@alertStub').should('have.been.calledWith', expectedText);
    }
  
    clickTimerAlertButton() {
      cy.get('#timerAlertButton').click();
    }

    verifyTimerAlert(){
      // Wait and assert the alert is shown after timer
      cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('This alert appeared after 5 seconds');
    });

    cy.wait(6000); 
    }

    triggerConfirm() {
      cy.get('#confirmButton').click();
    }
  
    stubConfirm(response = true) {
      cy.window().then(win => {
        cy.stub(win, 'confirm').returns(response).as('confirmStub');
      });
    }
  
    verifyConfirmResult(expected) {
      cy.get('#confirmResult').should('contain', expected);
    }
  
    stubPrompt(inputText) {
      cy.window().then(win => {
        cy.stub(win, 'prompt').returns(inputText).as('promptStub');
      });
    }
  
    triggerPrompt() {
      cy.get('#promtButton').click();
    }
  
    verifyPromptResult(expected) {
      cy.get('#promptResult').should('contain', expected);
    }
  }
  export default AlertsPage;