import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter'
})
export class FormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let prefix = "";
    let suffix = "";
    for (let i=0; i<args.times; i ++) {
      if (args.prefix != undefined) {
        prefix = prefix + args.prefix;
      }
      if (args.suffix != undefined) {
        suffix = suffix + args.suffix;
      }
    }
    return prefix + value + suffix;
  }

}
