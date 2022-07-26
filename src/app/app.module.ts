import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CouseListComponents } from './courses/course-list.component';
import { StarCompoent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CouseListComponents,
    StarCompoent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
