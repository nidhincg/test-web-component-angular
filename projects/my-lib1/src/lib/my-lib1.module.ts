import { NgModule } from '@angular/core';
import { MyLib1Component } from './my-lib1.component';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyLib1Component
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    DropdownModule
  ],
  exports: [
    MyLib1Component
  ]
})
export class MyLib1Module { }
