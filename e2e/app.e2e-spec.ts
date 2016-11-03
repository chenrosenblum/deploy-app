import { DeployAppPage } from './app.po';

describe('deploy-app App', function() {
  let page: DeployAppPage;

  beforeEach(() => {
    page = new DeployAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
