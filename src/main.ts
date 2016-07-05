import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {ROUTER_PROVIDERS}  from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from   '@angular/http';
import { LoginPageAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(LoginPageAppComponent,[ROUTER_PROVIDERS ,HTTP_PROVIDERS]);
