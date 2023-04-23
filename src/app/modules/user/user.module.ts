import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserListComponent} from './user-list/user-list.component';
import {SharedModule} from "../../shared/shared.module";

export const COMPONENTS = [
  UserDetailsComponent,
  UserListComponent
]

export const MODULES = [
  CommonModule,
  UserRoutingModule,
  SharedModule
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MODULES
  ]
})
export class UserModule {
}
