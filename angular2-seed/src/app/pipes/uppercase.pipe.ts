import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

  transform(value:any) {
    if (value) {
      value = value.replace(/[^A-Za-z/\s]/gi, '');

      var splitStr = value.toLowerCase().split(' ');
      for (var i = 0; i < splitStr.length; i++)
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');

    }
}
