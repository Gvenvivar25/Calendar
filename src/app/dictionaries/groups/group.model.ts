import {DescriptionOfPlan} from '../courses/course.model';

export class Group {
    public id: number;
    public groupName: string;
    public numberOfSubgroup: number;
 //   public typeOfCourse: TypeOfCourse;
    public typeOfEducation: TypeOfEducation;
    public descriptionOfPlanDto: DescriptionOfPlan;
}

export class TypeOfEducation {
    public id: string;
    public value: string;
    public short_value: string;
}