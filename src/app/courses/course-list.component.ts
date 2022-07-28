import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})

export class CouseListComponents implements OnInit{
    
    filteredCouses: Course [] = [];
    _courses: Course[] = [];
    _filterBy: string =  "";

    constructor( private courseSevice: CourseService) {}

    ngOnInit(): void {
        this._courses = this.courseSevice.retrieveAll();
        this.filteredCouses = this._courses;
    }

    set filter(value: string) {
        this._filterBy = value;
        this.filteredCouses = this._courses.filter(
            (course: Course ) => 
            course.name.toLocaleLowerCase()
            .indexOf(this._filterBy
            .toLocaleLowerCase()) >-1 )
    }
    get filter() {
        return this._filterBy;
    }
}