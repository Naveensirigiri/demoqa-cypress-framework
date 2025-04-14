class CheckboxPage {

  // Page Elements
  checkboxPageAddress = '/checkbox';
  expandAll = '.rct-option-expand-all';
  checkBoxText = '.rct-title';
  checkBoxRootNode = '.rct-node';
  checkBoxContainerNode = '.rct-checkbox';
  checkBoxChecked = 'rct-checkbox-checked';
  checkBoxIndeterminate = 'rct-checkbox-indeterminate';
  confirmationMessage = '#result';

  // Page Methods
    visit() {
      cy.visit(this.checkboxPageAddress);
    }
  
    clickExpandAll() {
      cy.get(this.expandAll).click();
    }
  
    selectCheckbox(labelText) {
      cy.contains(this.checkBoxText, labelText).click();
    }

    unselectCheckbox(labelText) {
        // This toggles off if already selected
        cy.contains(this.checkBoxRootNode, labelText)
          .find(this.checkBoxContainerNode) // checkbox container
          .then(($checkbox) => {
            if ($checkbox.hasClass(this.checkBoxChecked) || $checkbox.hasClass(this.checkBoxIndeterminate)) {
              cy.wrap($checkbox).click(); // only click if checked or partially checked
            }
          });
      }
  
    getResultText() {
      return cy.get(this.confirmationMessage);
    }
  }
  
  export const checkboxPage = new CheckboxPage();