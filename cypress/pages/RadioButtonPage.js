class RadioButtonPage {

  // Page Elements
  radioButtonPageAddress = '/radio-button';
  confirmationMessageText = '.text-success';


  // Page Methods
    visit() {
      cy.visit(this.radioButtonPageAddress);
    }
  
    selectOption(optionLabel) {
      cy.get(`label[for="${optionLabel}Radio"]`).click();
    }

    getConfirmationText() {
     return cy.get(this.confirmationMessageText);
    }

    verifySelection(expectedText) {
      cy.get(this.confirmationMessageText).should('contain', expectedText);
    }

    assertSelectedOption(expectedText) {
        this.getConfirmationText().should('have.text', expectedText);
      }

  }
  export default RadioButtonPage;