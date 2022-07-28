import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseInfoComponent } from './courses/course-info.component';
import { CouseListComponents } from './courses/course-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponents } from './not-found/not-found.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarCompoent } from './star/star.component';

@NgModule({
  declarations: [
    ReplacePipe,
    NavBarComponent,
    AppComponent,
    CouseListComponents,
    StarCompoent,
    CourseInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CouseListComponents
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '**', component: NotFoundComponents
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
