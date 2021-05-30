import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  nombre:string = 'Ausner Miranda';

  nombre2:string = 'aUSnEr MIrAndA';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI:number = Math.PI;

  porcentaje:number = 0.234;

  salario:number = 1234.5;

  heroe = {
    nombre: 'Peter',
    clave: 'Spiderman',
    edad: 20,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };


  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');

    }, 4500);
  });

  fecha :Date = new Date();

idioma:string = 'es';


  es(){this.idioma = 'es';}

  en(){this.idioma = 'en';}

  fr(){this.idioma = 'fr';}


  videoUrl:string = 'https://www.youtube.com/embed/OoFn9bNvxiA';

  activar:boolean = true;

  password(){this.activar = !this.activar}

}
