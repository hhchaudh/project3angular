import { AvalancheProtoPage } from './app.po';

describe('avalanche-proto App', function() {
  let page: AvalancheProtoPage;

  beforeEach(() => {
    page = new AvalancheProtoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
