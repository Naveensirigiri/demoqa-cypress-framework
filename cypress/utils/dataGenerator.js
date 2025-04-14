import { faker } from '@faker-js/faker';

export const generateUserData = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  gender: 'Male',
  mobile: faker.string.numeric(10), // e.g. "8745219034"
  subject: 'Maths',
  hobby: '1',
  address: faker.location.streetAddress(),
  state: 'NCR',
  city: 'Delhi',
});