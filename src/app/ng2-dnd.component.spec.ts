import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2DndAppComponent } from '../app/ng2-dnd.component';

beforeEachProviders(() => [Ng2DndAppComponent]);

describe('App: Ng2Dnd', () => {
  it('should create the app',
      inject([Ng2DndAppComponent], (app: Ng2DndAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-dnd works!\'',
      inject([Ng2DndAppComponent], (app: Ng2DndAppComponent) => {
    expect(app.title).toEqual('ng2-dnd works!');
  }));
});
