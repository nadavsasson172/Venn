import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import {Book} from "../models/book.model";
import {BooksService} from "../services/books.service";

export interface EditBookModel {
  titleOfEdittedBook: string;
  book: Book;
}

@Component({
  selector: 'alert',
  template: `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" (click)="cancel()" >&times;</button>
        <h4 class="modal-title">Edit Book</h4>
      </div>
      <div class="modal-body">
          <p *ngIf="errTitleAlreadyExists">{{this.messageForTitleError}}</p>
        <div class="form-group has-feedback" [ngClass]="{'has-error': errTitleAlreadyExists}">
          <label for="usr">Title</label>
          <input type="text" required class="form-control" id="title" [(ngModel)]="book.title" #title="ngModel" >
        </div>
        <div class="form-group has-feedback" [ngClass]="{'has-error': authorIsEmpty}">
          <p *ngIf="authorIsEmpty">Mandatory Field</p>
          <label for="usr">Author:</label>
          <input type="text" required class="form-control" id="author"
                  [(ngModel)]="book.author" #author="ngModel">
        </div>
        <div class="form-group">
          <label for="usr">Date:</label>
          <input type="date" class="form-control" id="date" [(ngModel)]="book.date">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="cancel()">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="save()">Save</button>
      </div>
    </div>
  </div>`,
})
export class EditBookModalComponent extends DialogComponent<EditBookModel, null> implements EditBookModel {
  titleOfEdittedBook: string;
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

  save() {
    var result = this.bookService.checkTitleValidity(this.book);

    if (result.flag || this.book.title === this.titleOfEdittedBook) {
      this.errTitleAlreadyExists = false;
      if(!this.authorFieldIsEmpty()) {
        this.bookService.update(this.book, this.titleOfEdittedBook);
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
