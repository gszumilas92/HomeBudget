import { Component, OnInit, Input } from '@angular/core';
import { WeekService } from "./manage-weeks.service";


@Component({
  selector: 'app-manage-weeks',
  templateUrl: './manage-weeks.component.html',
  styleUrls: ['./manage-weeks.component.css']
})
export class ManageWeeksComponent implements OnInit {

  incomes
  outcomes

  constructor(private weekService: WeekService) {

  }
  
  ngOnInit() {
    this.incomes = this.weekService.getIncomes();
    this.outcomes = this.weekService.getOutcomes();
  }

  deleteItemFromIncomes(id) {
    this.incomes = this.incomes.filter(item => id !== item.id)
  }

  deleteItemFromOutcomes(id) {
    this.outcomes = this.outcomes.filter(item => id !== item.id)
  }

  openModal() {
    
  }

  addItem() {
    
  }

  editItem() {

  }
}
