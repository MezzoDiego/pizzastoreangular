import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { IsUserLoggedDirective } from './directives/is-user-logged.directive';



@NgModule({
  declarations: [
    IsUserLoggedDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    IsUserLoggedDirective
  ]
})
export class SharedModule { }
