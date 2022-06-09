import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {


  @Input()listaClientes: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
