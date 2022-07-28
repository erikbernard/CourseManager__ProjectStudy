import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl:'./course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    course?: Course ;

    constructor( private activatedRoute: ActivatedRoute, private courseService: CourseService ){

    }

    ngOnInit(): void {
        this.course = this.courseService.retrieveById(
            +`${this.activatedRoute.snapshot.paramMap.get('id')}`
        );
    }

    onSave(): void {
        this.courseService.save(this.course);
    }

}