import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModulesRoutingModule} from './modules-routing.module';
import {UserModule} from "./user/user.module";

export const MODULES = [
  CommonModule,
  ModulesRoutingModule,
  UserModule
]

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ]
})
export class ModulesModule {
}
