import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../other/clientes.service';
import {Cliente} from '../../other/clientes/cliente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-clientess',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  cliente: Cliente

  clientes: Cliente[]

  form: FormGroup

  constructor(
    private clienteService: ClientesService,
    private _builder: FormBuilder
  ) { 
    this.form = this._builder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      edad: [null , Validators.required]
    })
  }

  ngOnInit(): void {
    this.cliente = this.clienteService.newCliente()
    this.clientes = this.clienteService.getClientes()
  }

  nuevoCliente() : void{
    console.log(this.cliente)
    this.clienteService.addCliente(this.cliente)
    this.cliente = this.clienteService.newCliente()
    console.log(this.clienteService.getClientes())
  }

  enviar(values){
    console.log(values)
  }

}
