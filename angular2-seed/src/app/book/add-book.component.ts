import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import {Book} from "../models/book.model";
import {BooksService} from "../services/books.service";

export interface AddBookModel {
  book: Book;
}

@Component({
  selector: 'add-alert',
  template: `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" (click)="cancel()" >&times;</button>
        <h4 class="modal-title">Add Book</h4>
      </div>
      <div class="modal-body">
        <p *ngIf="errTitleAlreadyExists">{{this.messageForTitleError}}</p>
        <div class="form-group has-feedback" [ngClass]="{'has-error': errTitleAlreadyExists}">
          <label for="usr">Title</label>
          <input type="text" required class="form-control" id="title" #title>  
        </div>
        <div class="form-group has-feedback" [ngClass]="{'has-error': authorIsEmpty}">
          <p *ngIf="authorIsEmpty">Mandatory Field</p>
          <label for="usr">Author:</label>
          <input type="text" required class="form-control" id="author" #author>
        </div>
        <div class="form-group">
          <label for="usr">Date:</label>
          <input type="date" class="form-control" id="date" #date>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="cancel()">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="add(title.value, author.value, date.value)">Add</button>
      </div>
    </div>
  </div>`,
})
export class AddBookModalComponent extends DialogComponent<AddBookModel, null> implements AddBookModel {
  book: Book;
  private errTitleAlreadyExists: boolean;
  private authorIsEmpty: boolean;
  messageForTitleError: string;

  constructor(dialogService: DialogService,private bookService: BooksService) {
    super(dialogService);
  }

  cancel() {
    this.close();
  }

  add(title: string, author: string, date: Date) {

    this.book = new Book(title, author, date);
    this.book.imgPath = "http://i.ebayimg.com/00/s/MzQ0WDMwMA==/z/UnEAAOSwxYxUyHif/$_3.JPG?set_id=2";

    var result = this.bookService.checkTitleValidity(this.book);

    if (result.flag) {
      this.errTitleAlreadyExists = false;
      if(!this.authorFieldIsEmpty()) {
        this.bookService.add(this.book);
        this.close();
      }

    }
    else {
      this.messageForTitleError = result.errorMessage;
      this.errTitleAlreadyExists = true;
    }
  }

  authorFieldIsEmpty (){
    if(this.book.author == ''){
      this.authorIsEmpty = true;
      return true;
    }
    else {
      this.authorIsEmpty = false;
      return false;
    }
  }
}

