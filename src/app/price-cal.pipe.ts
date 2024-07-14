import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceCal',
  standalone: true
})
export class PriceCalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value){
      let stringVal = value.toString();
      let splitVal = stringVal.split('.');
      if(splitVal[1] && splitVal[1].length< 3){
        let retVal = splitVal[1].length>=2?splitVal[1]+'0': splitVal[1]+'00';
        let finalVal = parseInt(splitVal[0])+'.'+parseFloat(retVal);
        return finalVal;
      }else {
        let stringVal = value.toString();
        return stringVal+'.'+'000';
      }
    }
    return null;
  }

}
