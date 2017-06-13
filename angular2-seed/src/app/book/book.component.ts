import {Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {Book} from "../models/book.model";
import {DialogService} from "ng2-bootstrap-modal";
import {EditBookModalComponent} from "./edit-book.component";

@Component({
  selector: 'book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})
export class BookComponent {


  @Input()
  private data: Book;

  @Output()
  private delete: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dialogService:DialogService) {

  }

  deleteBook(title: string) {
    this.delete.emit(title);
  }


  editBook() {
    this.dialogService.addDialog(EditBookModalComponent, {titleOfEdittedBook:this.data.title,
      book: new Book(this.data.title,this.data.author,this.data.date)});
  }


}

