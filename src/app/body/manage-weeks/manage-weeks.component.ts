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
  
  getIncomes() {
    this.weekService.getIncomes().then(incomes => this.incomes = incomes);
  }

  getOutcomes() {
    this.weekService.getOutcomes().then(outcomes => this.outcomes = outcomes);
  }

  ngOnInit() {
    this.getIncomes()
    this.getOutcomes()
  }

  deleteItemFromIncomes(id) {
    this.incomes = this.incomes.filter(item => id !== item.id)
  }

  deleteItemFromOutcomes(id) {
    this.outcomes = this.outcomes.filter(item => id !== item.id)
  }



  openModal() {
    
  }

  onAddIncome(income) {
    
  }

  editItem() {

  }
}
