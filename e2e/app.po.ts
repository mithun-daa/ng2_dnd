export class Ng2DndPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-dnd-app h1')).getText();
  }
}
