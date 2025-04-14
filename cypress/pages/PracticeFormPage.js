import { selectDateOfBirth } from "../utils/datePicker";

class PracticeFormPage {

  // Page Elements
  practiceFormPageAddress = '/automation-practice-form';
  firstNameTextFeild = '#firstName'; 
  lastNameTextFeild = '#lastName'; 
  emailFeild = '#userEmail'; 
  mobileNumberTextFeild = '#userNumber';
  subjectsTextFeild = '#subjectsInput';
  uploadPicture = '#uploadPicture';
  addressBox = '#currentAddress';
  stateDropdown = '#react-select-3-input';
  cityDropdown = '#react-select-4-input';
  submitButton = '#submit';
  confirmationMessageText = '#example-modal-sizes-title-lg';


  // Page Methods
    visit() {
      cy.visit(this.practiceFormPageAddress);
    }
  
    fillForm(userData) {
      cy.get(this.firstNameTextFeild).type(userData.firstName);
      cy.get(this.lastNameTextFeild).type(userData.lastName);
      cy.get(this.emailFeild).type(userData.email);
      cy.get(`input[name="gender"][value="${userData.gender}"]`).check({ force: true });
      cy.get(this.mobileNumberTextFeild).type(userData.mobile);
  
      selectDateOfBirth('1990-04-2');

      cy.get(this.subjectsTextFeild).type(`${userData.subject}{enter}`);
      cy.get(`#hobbies-checkbox-${userData.hobby}`).check({ force: true });
  
      cy.get(this.uploadPicture).selectFile('cypress/fixtures/sample.jpg');
      cy.get(this.addressBox).type(userData.address);
  
      cy.get(this.stateDropdown).type(`${userData.state}{enter}`, { force: true });
      cy.get(this.cityDropdown).type(`${userData.city}{enter}`, { force: true });
    }
  
    submitForm() {
      cy.get(this.submitButton).click({ force: true });
    }
  
    verifySubmission() {
      cy.get(this.confirmationMessageText).should('contain', 'Thanks for submitting the form');
    }
  }
  
  export default PracticeFormPage;