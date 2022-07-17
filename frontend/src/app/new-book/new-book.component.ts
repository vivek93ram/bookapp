import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bookModel } from '../book-list/book.model';
import { bookService } from '../book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})

export class NewbookComponent implements OnInit {
  
  bookItem = new bookModel("","","",0);


  constructor(public bookService: bookService, private router: Router) {}

  ngOnInit(): void {}

  Newbook() 
  {
    this.bookService.addbooks(this.bookItem);
    alert("New book Added");
    this.router.navigate(['/']);
  }

}
