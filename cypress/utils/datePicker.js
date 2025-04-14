//  Date Format --> yyyy-mm-dd
export const selectDateOfBirth = (dateString) => {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    cy.get('#dateOfBirthInput').click(); // Open date picker
  
    cy.get('.react-datepicker__month-select').select(month);
    cy.get('.react-datepicker__year-select').select(year.toString());
  
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
  
    cy.get(`.react-datepicker__day--0${formattedDay}`)
      .not('.react-datepicker__day--outside-month') // only pick visible ones
      .click();

  };