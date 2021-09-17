import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MyLib2Module } from 'my-lib2';
import { MyLib2Component } from 'projects/my-lib2/src/public-api';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    MyLib2Module
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor(public injector : Injector) {
    const element = createCustomElement(MyLib2Component, { injector: this.injector });
      if(!customElements.get('my-lib2')) {
        customElements.define("my-lib2", element);
      }
  }

  ngDoBootstrap(){
   
      
  }
}
