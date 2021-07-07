import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: `
    <div style="display: flex;align-items:center;justify-content:center;">
      <h1 style="display: flex;align-items:center;justify-content:center;color:#ff0000;height:80vh;margin:30px">Page Not Found</h1>
      <button class="btn btn-outline-light" routerLink="/project">Home</button>
    </div>
  `,
  styles: [
  


  ]
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
