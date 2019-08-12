import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DictionariesRoutingModule} from './dictionaries-routing.module';
import {DictionariesComponent} from './dictionaries.component';
import { DisciplineDetailComponent } from './disciplines/discipline-detail/discipline-detail.component';
import { DisciplineAddComponent } from './disciplines/discipline-add/discipline-add.component';
import {DisciplinesService} from './disciplines/disciplines.service';
import { DisciplineEditComponent } from './disciplines/discipline-edit/discipline-edit.component';
import {DisciplineListComponent} from './disciplines/discipline-list/discipline-list.component';
import {SidebarModule} from 'ng-sidebar';
import { TeacherAddComponent } from './teachers/teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teachers/teacher-edit/teacher-edit.component';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { TeacherDetailComponent } from './teachers/teacher-detail/teacher-detail.component';

@NgModule ({
    declarations: [
        DisciplineListComponent,
        DictionariesComponent,
        DisciplineDetailComponent,
        DisciplineAddComponent,
        DisciplineEditComponent,
        TeacherAddComponent,
        TeacherEditComponent,
        TeacherListComponent,
        TeacherDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DictionariesRoutingModule,
        SidebarModule.forRoot()

    ],
    providers: [DisciplinesService]
})
export class DictionariesModule {}
