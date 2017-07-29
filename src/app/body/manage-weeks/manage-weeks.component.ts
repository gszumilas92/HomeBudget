import { Component, OnInit, Input } from '@angular/core';
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
  }

  deleteItemFromOutcomes(id) {
    this.weekService.deleteOutcome(id)
  }

  //Lifecycle Hooks
  ngOnInit() {
    this.getIncomes()
    this.getOutcomes()

    //TODO change interval to something else
    const checkForUpdates = Observable.interval(300);
    checkForUpdates.subscribe(
      () => {
        this.getIncomes()
        this.getOutcomes()
      }
    )
  }

}
