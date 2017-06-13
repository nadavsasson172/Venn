import {Book} from "../models/book.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

export class EditBookResult {

  public flag: boolean;
  public errorMessage: string;

  constructor(flag: boolean, errorMessage?: string) {
    this.flag= flag;
    this.errorMessage = errorMessage;
  }
}

@Injectable()
export class BooksService {

  public books: Book[];

  constructor(private http: Http) {

  }

  public add(book: Book) {
    this.books.push(book);
  }

  public checkTitleValidity(book: Book) : EditBookResult  {

    var flag = false;
    if (book.title == ''){
      return new EditBookResult(false, 'Mandatory field');
    }
    for(var i=0;i < this.books.length; i++) {
      if ( this.books[i].title === book.title) {
        return new EditBookResult(false, 'Book title already exists');
      }
    }

    return new EditBookResult(true);
  }

  public get() {
    return this.books;
  }

  public load() : Observable<Book[]> {
    return this.http.get('http://localhost:9615').map(res=> res.json()).do((books) => {
      this.books = books;
      return books;
    });
  }



  public update(book: Book, titleOfEdittedBook: string)  {

    for(var i=0;i < this.books.length; i++) {
      if ( this.books[i].title === titleOfEdittedBook) {
            this.books[i].title = book.title;
            this.books[i].author = book.author;
            this.books[i].date = book.date;
      }
    }

  }



  public delete(title: string) {
    var index = this.books.findIndex((elt) => (elt.title===title));
    if (index != -1) {
      this.books.splice(index, 1);
    }

  }
}
