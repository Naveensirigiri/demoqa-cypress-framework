import RadioButtonPage from '../pages/RadioButtonPage';

describe('Radio Button Page Tests', () => {
  const radioButtonPage = new RadioButtonPage();

  beforeEach(() => {
    radioButtonPage.visit();
  });

  it('Validate selecting Yes radio button', () => {
    radioButtonPage.selectOption('yes');
    radioButtonPage.verifySelection('Yes');
    radioButtonPage.assertSelectedOption('Yes');
  });

  it('Validate selecting Impressive radio button', () => {
    radioButtonPage.selectOption('impressive');
    radioButtonPage.verifySelection('Impressive');
    radioButtonPage.assertSelectedOption('Impressive');
  });
  
  it('Validate selecting No radio button', () => {
    radioButtonPage.selectOption('no');
    radioButtonPage.verifySelection('No');
    radioButtonPage.assertSelectedOption('No');
  });

});