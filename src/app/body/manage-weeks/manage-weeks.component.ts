import { Component, OnInit, Input, Output } from '@angular/core';
import { WeekService } from "./manage-weeks.service";

import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';


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

  deleteItemFromIncomes(id) {
    this.weekService.deleteIncome(id)
    this.getIncomes()
  }

  deleteItemFromOutcomes(id) {
    this.weekService.deleteOutcome(id)
    this.getOutcomes();
  }

  editOutcome(id) {
    
  }


  //Lifecycle Hooks
  ngOnInit() {
    this.getIncomes()
    this.getOutcomes()

    this.weekService.incomesChanged.subscribe(
      (form) => {
        this.getIncomes()
        this.getOutcomes()
      }
    )
  }

}
