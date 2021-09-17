import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-style-add',
  templateUrl: './style-add.component.html',
  styleUrls: ['./style-add.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class StyleAddComponent implements OnInit {

  display:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(event:any) {
    this.display = true;
  }

  close(event:any) {
    this.display = false;
  }

}
