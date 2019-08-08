import {NgModule} from '@angular/core';
import {DisciplineListComponent} from './disciplines/discipline-list/discipline-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DictionariesRoutingModule} from './dictionaries-routing.module';
import {DictionariesComponent} from './dictionaries.component';
import { DisciplineDetailComponent } from './disciplines/discipline-detail/discipline-detail.component';
import { DisciplineAddComponent } from './disciplines/discipline-add/discipline-add.component';
import {DisciplinesService} from './disciplines/disciplines.service';
import { DisciplineEditComponent } from './disciplines/discipline-edit/discipline-edit.component';

@NgModule ({
    declarations: [
        DisciplineListComponent,
        DictionariesComponent,
        DisciplineDetailComponent,
        DisciplineAddComponent,
        DisciplineEditComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DictionariesRoutingModule

    ],
    providers: [DisciplinesService]
})
export class DictionariesModule {}
