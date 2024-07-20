/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ListDetailsComponent } from './app/list-details/list-details.component';

bootstrapApplication(ListDetailsComponent, appConfig)
  .catch((err) => console.error(err));
