import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {ModulesModule} from "./modules/modules.module";

export const MODULES = [
  BrowserModule,
  AppRoutingModule,
  CoreModule,
  SharedModule,
  ModulesModule
];

export const COMPONENT = [
  AppComponent
];

@NgModule({
  declarations: [
    ...COMPONENT
  ],
  imports: [
    ...MODULES,
  ],
  providers: [],
  bootstrap: [...COMPONENT]
})
export class AppModule {
}
