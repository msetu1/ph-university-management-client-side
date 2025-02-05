export type TAcademicSemester = {
    _id: string;
    name: string;
    year: string;
    code: string;
    startMonth: string;
    endMonth: string;
    createdAt: string;
    updatedAt: string;
};

export type TAcademicFaculties={
    name: string;
}
export type TAcademicDepartment={
    name: string;
    academicFaculty:object
}
