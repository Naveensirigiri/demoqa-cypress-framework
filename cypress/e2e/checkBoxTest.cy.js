import { checkboxPage } from '../pages/CheckBoxPage';

describe('Checkbox Page Tests', () => {
  it('User should be able to select different checkboxes and verify confirmation message', () => {
    const checkboxesToSelect = ['Documents', 'Downloads', 'Home']; // you can update this list dynamically too

    checkboxPage.visit();
    checkboxPage.clickExpandAll();

    checkboxesToSelect.forEach(label => {
      checkboxPage.selectCheckbox(label);

      // Assert result text contains for selected value
        checkboxPage.getResultText().should(($el) => {
        const resultText = $el.text().toLowerCase();
        expect(resultText).to.include(label.toLowerCase());
      });

      checkboxPage.unselectCheckbox(label);

    });

    
  });
});