import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardService} from "./services/dashboard.service";
import {HttpClientModule} from "@angular/common/http";
import {ChartModule} from "primeng/chart";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CommonModule} from "@angular/common";
import {AvatarModule} from "primeng/avatar";
import {InputMaskModule} from "primeng/inputmask";
import { FlexLayoutModule } from '@angular/flex-layout';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    DropdownModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    ProgressBarModule,
    FlexLayoutModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
