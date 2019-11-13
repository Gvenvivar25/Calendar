import { Component, OnInit } from '@angular/core';
import {AddWorkOfTeacherService} from '../add-work-of-teacher.service';
import {AddWorkOfTeacher} from '../add-work-of-teacher.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-work-list',
  templateUrl: './add-work-list.component.html',
  styleUrls: ['./add-work-list.component.scss']
})
export class AddWorkListComponent implements OnInit {
  addWorks: AddWorkOfTeacher[];
    startDate;
    endDate;

  constructor(private addWorkOfTeacherService: AddWorkOfTeacherService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {  }

    loadAddWorks() {
        return this.addWorkOfTeacherService.getAllAddWork(this.startDate, this.endDate)
            .subscribe((data: AddWorkOfTeacher[]) => {
                this.addWorks = data;
            });
    }

    onDeleteAddWork(addWork: AddWorkOfTeacher) {
        this.addWorkOfTeacherService.deleteAddWork(addWork.id).subscribe(() => {
            this.loadAddWorks();
        });
    }

    onAdd() {
        this.router.navigate(['./add'], {relativeTo: this.route});
    }

}