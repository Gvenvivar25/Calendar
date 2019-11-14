import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import {DictionariesModule} from './dictionaries/dictionaries.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReportsModule} from './reports/reports.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtInterceptor} from './shared/helpers/jwt.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './shared/services/authentication.service';
import {TimetablesModule} from './timetables/timetables.module';
import { Page404Component } from './shared/components/page404/page404.component';
import { AddWorkListComponent } from './additional-work/add-work-list/add-work-list.component';
import { AddWorkAddComponent } from './additional-work/add-work-add/add-work-add.component';
import { AddWorkEditComponent } from './additional-work/add-work-edit/add-work-edit.component';
import {ToastrModule} from 'ngx-toastr';
import { Page403Component } from './shared/components/page403/page403.component';

registerLocaleData(localeIt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SignInComponent,
    Page404Component,
    AddWorkListComponent,
    AddWorkAddComponent,
    AddWorkEditComponent,
    Page403Component,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DictionariesModule,
    ReportsModule,
    AppRoutingModule,
    NgSelectModule,
    FullCalendarModule,
    TimetablesModule,
    ToastrModule.forRoot({
        closeButton: true,
       // positionClass: 'toast-bottom-right'
    })
  ],
  providers: [AuthenticationService,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
