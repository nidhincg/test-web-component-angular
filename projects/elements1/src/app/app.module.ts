import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MyLib1Component, MyLib1Module } from 'my-lib1';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { StyleAddComponent } from './style-add/style-add.component';
import { StyleAdd1Component } from './style-add1/style-add1.component';


@NgModule({
  declarations: [
    
  
    StyleAddComponent,
            StyleAdd1Component
  ],
  imports: [
    BrowserModule,
    MyLib1Module,
    ButtonModule,
    DialogModule
  ],
  providers: []
})
export class AppModule { 
  constructor(public injector : Injector) {
    const element = createCustomElement(StyleAddComponent, { injector: this.injector })
      if(!customElements.get('my-lib1')) {
        customElements.define("my-lib1", element);
      }
  }

  ngDoBootstrap(){
    
      
    
  }
}
