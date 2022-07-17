import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewbookComponent } from './new-book/new-book.component';
import { bookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: "", component: bookListComponent},
  { path: "add", component: NewbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
