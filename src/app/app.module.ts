import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { Form, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import {MatTableDataSource} from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [MatTableDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
