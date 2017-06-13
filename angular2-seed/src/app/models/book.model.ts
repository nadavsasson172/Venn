export class Book {

  constructor(title,author,date,imgPath?) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.imgPath = imgPath;
  }

  title: string;
  author: string;
  date: Date;
  imgPath: string;
}
