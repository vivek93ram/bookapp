import { Component, OnInit } from '@angular/core';
import { bookModel } from './book.model';
import { bookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class bookListComponent implements OnInit {

  
  books: bookModel[] | any;
  // imageWidth: number = 50;
  // imageMargin: number = 2;

  constructor(public bookService: bookService) { }

  ngOnInit(): void {
    this.bookService.getbooks().subscribe((data) => {
      this.books = JSON.parse(JSON.stringify(data));
    })
  }

}
