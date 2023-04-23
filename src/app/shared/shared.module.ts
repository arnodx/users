import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PRIMENG_MODULES} from "../primeng.module";
import {StarComponent} from './components/star/star.component';
import {AvatarComponent} from './components/avatar/avatar.component';

export const MODULES = [
  CommonModule
]

export const COMPONENTS = [
  StarComponent,
  AvatarComponent
]

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
