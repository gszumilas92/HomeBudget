import { Component, OnInit, Input } from '@angular/core';

import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from "@angular/forms";
import { WeekService } from "../manage-weeks.service";

import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modal:NgbModalRef

  constructor(private modalService: NgbModal,
              private weekService: WeekService) {}


  addItem(form: NgForm) {
    let localModal = this.modal
    if(form.value.type==="income"){
      this.weekService.addIncome(form.value)
    } else {
      this.weekService.addOutcome(form.value)
    }  
    this.weekService.incomesChanged.next(form.value);
    
    localModal.close()
  }

  ngOnInit() {

  }


  
  //MODAL COMPONENT
  open(content) {
    this.modal = this.modalService.open(content)
  }
}


