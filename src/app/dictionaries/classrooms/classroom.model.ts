export class Classroom {
    public id: number;
    public number: string;
    public typeOfClassroom: TypeOfClassroom;
}

export class TypeOfClassroom {
    public id: string;
    public value: string;
    public short_value: string;
}

// модификация класса для возврата на сервер
export class ClassroomDto {
    public id: number;
    public number: string;
    public typeOfClassroom: string;
}

