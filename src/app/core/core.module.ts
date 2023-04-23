import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

export const MODULES = [
  CommonModule,
  HttpClientModule
]


@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ]
})
export class CoreModule {
}
