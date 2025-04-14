import PracticeFormPage from '../pages/PracticeFormPage';
import { generateUserData } from '../utils/dataGenerator';

describe('Practice Form Page Tests', () => {
  const formPage = new PracticeFormPage();
  const userData = generateUserData();

  it('User should be able to fill and submit the form with dynamic data', () => {
    formPage.visit();
    formPage.fillForm(userData);
    formPage.submitForm();
    formPage.verifySubmission();
  });
});