import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BooksService} from "./services/books.service";
import {BookComponent} from "./book/book.component";
import {BootstrapModalModule} from "ng2-bootstrap-modal";
import {EditBookModalComponent} from "./book/edit-book.component";
import {AddBookModalComponent} from "./book/add-book.component";
import {DatePipe} from "@angular/common";
import {CapitalizePipe} from "./pipes/uppercase.pipe";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    EditBookModalComponent,
    AddBookModalComponent,
    CapitalizePipe
  ],
  entryComponents: [
    EditBookModalComponent,
    AddBookModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BootstrapModalModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
