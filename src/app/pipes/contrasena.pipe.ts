import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean=true ): string {

    if(activar){
      let cadena:string = '';
      for(let letra of value){
        cadena += '*';
      }
      return cadena;
    }

    return value;
  }

}
