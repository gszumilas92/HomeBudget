import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ManageWeeksComponent } from './body/manage-weeks/manage-weeks.component';
import { WeekComponent } from './body/week/week.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './body/manage-weeks/modal/modal.component';
import { FormsModule } from '@angular/forms';

import { WeekService } from "./body/manage-weeks/manage-weeks.service";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavigationComponent,
    ManageWeeksComponent,
    WeekComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    WeekService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
