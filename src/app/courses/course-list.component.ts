import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CouseListComponents implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular',
                imgUrl: '/assets/images/forms.png',
                price: 22,
                code: '2323',
                duration: 22,
                rating: 3.4,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular 02',
                imgUrl: '/assets/images/http.png',
                price: 22,
                code: '2323',
                duration: 22,
                rating: 5,
                releaseDate: 'April, 8, 2019'
            }
        ]
    }

}