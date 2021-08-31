import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'mark'
})
export class MarkPipe implements PipeTransform {

constructor(private sanitizer:DomSanitizer){}

  transform(value: string, city : string): any {
    return this.sanitizer.bypassSecurityTrustHtml('<h1 style="background-color:yellow">' + city + '</h1>')
  }

}
