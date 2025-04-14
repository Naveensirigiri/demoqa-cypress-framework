import AlertsPage from '../pages/AlertsPage';
import { faker } from '@faker-js/faker';

describe('Alerts Page Tests', () => {
  const alerts = new AlertsPage();

  beforeEach(() => {
    alerts.visit();
  });

  it('Handle simple alert and validate the Alert', () => {
    alerts.stubAlert();
    alerts.triggerAlert();
    alerts.verifyAlertCall('You clicked a button');
  });

  it('Should wait and handle timer alert after 5 seconds', () => {
    alerts.clickTimerAlertButton();
    alerts.verifyTimerAlert();
  });

  it('Handle confirm OK and validate confirmation message', () => {
    alerts.stubConfirm(true);
    alerts.triggerConfirm();
    alerts.verifyConfirmResult('Ok');
  });

  it('Handle confirm Cancel and validate confirmation message', () => {
    alerts.stubConfirm(false);
    alerts.triggerConfirm();
    alerts.verifyConfirmResult('Cancel');
  });

  it('Handle prompt input and validate the prompt message', () => {
    const input = faker.person.firstName();
    alerts.stubPrompt(input);
    alerts.triggerPrompt();
    alerts.verifyPromptResult(input);
  });
});