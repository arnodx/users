import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PRIMENG_MODULES} from "../primeng.module";

export const MODULES = [
  CommonModule
]

export const COMPONENTS = []

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES,
    ...PRIMENG_MODULES,
  ],
  exports: [
    ...PRIMENG_MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule {
}
