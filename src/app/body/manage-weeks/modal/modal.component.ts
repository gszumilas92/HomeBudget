import { Component, OnInit, Input } from '@angular/core';

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

  incomes
  outcomes

  constructor(private modalService: NgbModal, private weekService: WeekService) {}



  addItem(form: NgForm) {
    if(form.value.type==="income"){
      this.weekService.addIncome(form.value)
    } else {
      this.weekService.addOutcome(form.value)
    }
    //Send Data
    this.weekService.incomesChanged.next(form.value);
  }

  ngOnInit() {
 
  }

  //MODAL COMPONENT
  open(content) {
    this.modalService.open(content)
  }
}


