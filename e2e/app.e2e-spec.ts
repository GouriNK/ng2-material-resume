import { Ng2MaterialResumePage } from './app.po';

describe('ng2-material-resume App', function() {
  let page: Ng2MaterialResumePage;

  beforeEach(() => {
    page = new Ng2MaterialResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
