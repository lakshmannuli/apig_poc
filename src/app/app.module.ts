import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatRadioModule, MatCheckboxModule, MatSelectModule, MatSlideToggleModule, MatNativeDateModule } from '@angular/material'
import { AppComponent } from './app.component';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { NewTicketComponent } from './ticket/new-ticket/new-ticket.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NewAPIComponent } from './newapi/newapi.component';
import { PageNotFoundComponent } from './other/pagenotfound.component';
import { Routes, RouterModule }  from '@angular/router';

//Services

import { APIService } from '../providers/api-service';

const appRoutes:Routes=[
  {path:'newticket', component:NewAPIComponent},
  {path:'new', component:NewTicketComponent},
  {path:'question', component:QuestionnaireComponent},
  {path:'pagenotfound', component:PageNotFoundComponent},
  {path:'', redirectTo:'/newticket', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NewTicketComponent,
    QuestionnaireComponent,
    NewAPIComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    FooterModule,
    NavbarModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }