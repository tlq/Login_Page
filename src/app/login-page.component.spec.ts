import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { LoginPageAppComponent } from '../app/login-page.component';

beforeEachProviders(() => [LoginPageAppComponent]);

describe('App: LoginPage', () => {
  it('should create the app',
      inject([LoginPageAppComponent], (app: LoginPageAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'login-page works!\'',
      inject([LoginPageAppComponent], (app: LoginPageAppComponent) => {
   
  }));
});
