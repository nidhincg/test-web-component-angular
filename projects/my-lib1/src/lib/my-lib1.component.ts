import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-my-lib1',
  templateUrl: "./my-lib1.component.html",
  // template: `
  //   <p>
  //     my-lib1 works!
  //     <button pButton type="button" label="Click" ></button>
  //   </p>
  // `,
  styleUrls: ['./my-lib1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyLib1Component implements OnInit {

  display:boolean = false;
  cities: any[];
  selectedCity: any;

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
   }

  ngOnInit(): void {
  }

  openModal(event:any) {
    this.display = true;
  }

  close(event:any) {
    this.display = false;
  }

}
