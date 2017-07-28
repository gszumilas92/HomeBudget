import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  weeks = [[1,250,450,200],[1,250,450,200]]

  constructor() { }

  ngOnInit() {
  }

  
  
}
