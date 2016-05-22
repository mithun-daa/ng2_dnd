import { Ng2DndPage } from './app.po';

describe('ng2-dnd App', function() {
  let page: Ng2DndPage;

  beforeEach(() => {
    page = new Ng2DndPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-dnd works!');
  });
});
