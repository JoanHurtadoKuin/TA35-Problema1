import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T35-Problema1';

  //Variables
  nombre:any = "";
  cif:any = "";
  direccion:any = "";
  grupo:any = 0;
  infoCliente: any = [];


  altaCliente(){

    //Guardamos la informacion del cliente
    let cliente = [this.nombre, this.cif, this.direccion, this.grupo];

    console.log(cliente);

    //La guardamos en la array
    this.infoCliente.push(cliente);

  }

}
