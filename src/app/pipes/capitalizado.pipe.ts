import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    //value -> valor que le enviamos a transformar
    //args -> atrapa los argumentos del pipe

    value = value.toLocaleLowerCase();
    let nombre = value.split(' ');
    if(todas){
      nombre = nombre.map(palabra => {
        return palabra[0].toUpperCase() + palabra.substring(1); 
      })
      return nombre.join(' ');
    }else{

      nombre[0] = nombre[0][0].toUpperCase() + nombre[0].substring(1);
    }
    return nombre.join(' ');
  }
}
