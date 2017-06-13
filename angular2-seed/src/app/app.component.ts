import {Component, OnInit} from '@angular/core';
import {Book} from "./models/book.model";
import {BooksService} from "./services/books.service";
import {DialogService} from "ng2-bootstrap-modal";
import {AddBookModalComponent} from "./book/add-book.component";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  books: Book[];

  constructor(private booksService: BooksService, private dialogService:DialogService) {

  }

  ngOnInit(): void {
    this.booksService.load().subscribe((res: Book[]) => {
      this.books = res;
    }, (err) => {
      alert(`Error While Fetchig Books From Server.`);
      console.error(err);
    });
  }

  addBook() {
    this.dialogService.addDialog(AddBookModalComponent);
  }


  deleteBook(title: string) {
    var result = window.confirm('Are You Sure You Want To Delete The Book?');
    if (result) {
      this.booksService.delete(title);
    }
  }
}
