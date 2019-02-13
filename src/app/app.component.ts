import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public TABLE_DATA: any[] = [
    {
      "id": "5",
      "name": "cony #5",
      "thumbnailUrl": "image/5.gif",
      "price": 170
    },
    {
      "id": "1",
      "name": "cony #1",
      "thumbnailUrl": "image/1.gif",
      "price": 170
    },
    {
      "id": "2",
      "name": "cony #2",
      "thumbnailUrl": "image/2.gif",
      "price": 270
    },
    {
      "id": "8",
      "name": "cony #8",
      "thumbnailUrl": "image/8.gif",
      "price": 70
    },
    {
      "id": "10",
      "name": "<img onerror='window.document.body.innerHTML = \"<h1>XSS</h1>\";' src=''> ",
      "thumbnailUrl": "image/10.gif",
      "price": 170
    },
    {
      "id": "4",
      "name": "cony #4",
      "thumbnailUrl": "image/4.gif",
      "price": 150
    },
    {
      "id": "3",
      "name": "cony #3",
      "thumbnailUrl": "image/3.gif",
      "price": 130
    },
    {
      "id": "6",
      "name": "cony #6",
      "thumbnailUrl": "image/6.gif",
      "price": 160
    },
    {
      "id": "9",
      "name": "cony #9",
      "thumbnailUrl": "image/9.gif",
      "price": 170
    },
    {
      "id": "7",
      "name": "cony #7",
      "thumbnailUrl": "image/7.gif",
      "price": 170
    }
  ];

  public isAsc: boolean = false;
  public refreshIntervalId: any;

  constructor() {
  }

  startrandom() {
    
    this.refreshIntervalId = setInterval(() => {
      console.log(this.isAsc);
      this.sort(this.isAsc);
      this.isAsc = !this.isAsc;
    }, 2000);
  }

  stoprandom() {
    clearInterval(this.refreshIntervalId);
    console.log('Interval cleared');
  }

  sort(isAsc: boolean) {
    if(isAsc){
      this.TABLE_DATA.sort(this.ascending);
    } else {
      this.TABLE_DATA.sort(this.descending);
    }
  }

  ascending(first, second) {
    if (first.price < second.price)
      return -1;
    if (first.price > second.price)
      return 1;
    return 0;
  }

  descending(first, second) {
    if (first.price < second.price)
      return 1;
    if (first.price > second.price)
      return -1;
    return 0;
  }
}