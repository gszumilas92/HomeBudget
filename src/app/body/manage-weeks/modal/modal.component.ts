import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from "@angular/forms";
import { WeekService } from "../manage-weeks.service";

import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult: string;
  incomes
  outcomes

  constructor(private modalService: NgbModal, private weekService: WeekService) {}

  addItem(form: NgForm) {
    if(form.value.type==="income"){
      this.weekService.addIncome(form.value)
    } else {
      this.weekService.addOutcome(form.value)
    }
  }

  ngOnInit() {
    //TODO change interval to something else
    const checkForUpdates = Observable.interval(300);
    checkForUpdates.subscribe(
      () => {
        this.weekService.getOutcomes().then(outcomes => this.outcomes = outcomes);
        this.weekService.getIncomes().then(incomes => this.incomes = incomes);
      }
    )
  }

  //MODAL COMPONENT
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}


