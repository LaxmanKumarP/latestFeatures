import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string) {
    let splitValue = value.split(' ');
    let fName = splitValue[0][0];
    let lName = splitValue[1];
    let fullName = `${fName} ${lName}`;
    if (splitValue.length > 1) {
      return fullName
    }
    return value;
  }

}
