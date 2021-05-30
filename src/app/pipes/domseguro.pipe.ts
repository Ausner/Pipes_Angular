import { Pipe, PipeTransform } from '@angular/core';

//PARA LIMPIAR LAS URLS Y DECIRLE A ANGULAR QUE CONFIAMOS EN ELLAS
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){}



  transform(value: string, ...args: unknown[]): SafeResourceUrl {

    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
