import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Cliente } from './clientes/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[]

  constructor() { 
    this.clientes = []
  }


  getClientes(){
    return this.clientes
  }

  addCliente(cliente : Cliente){
    this.clientes.push(cliente)
  }

  newCliente() : Cliente{
    return{
      nombre: '',
      direccion: '',
      edad: null,
    }
  }

}
