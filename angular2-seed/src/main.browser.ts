import './polyfills.browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {enableProdMode} from "@angular/core";

export const platformRef = platformBrowserDynamic();

platformRef.bootstrapModule(AppModule);


