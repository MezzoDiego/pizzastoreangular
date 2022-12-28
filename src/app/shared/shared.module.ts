import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { IsUserLoggedDirective } from './directives/is-user-logged.directive';
import { IfRoleDirective } from './directives/if-role.directive';



@NgModule({
  declarations: [
    IsUserLoggedDirective,
    IfRoleDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    IsUserLoggedDirective,
    IfRoleDirective
  ]
})
export class SharedModule { }
