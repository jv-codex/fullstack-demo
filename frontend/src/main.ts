/*
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';

platformBrowser().bootstrapModule(AppModule, {
  
})
  .catch(err => console.error(err));
*/

import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { provideHttpClient } from "@angular/common/http";

bootstrapApplication(App, {
  providers: [provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));