import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bootstrapjson= `
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.scss"
  ],
  "scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/@popperjs/core/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]`

  importModule= `
  import { ClientesModule } from "./components/cliente/clientes.module";
  `

  importFormsModule= `
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
  `

  importsModule = `
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],`

  importService = `
  import { ClientesService } from 'src/app/other/clientes.service';
  `

  importServiceProvider= `
  providers: [
    ClientesService
  ]`

  componentModuleImport = `
  import { ClientesComponent } from './clientes.component'
  `

  componentModuleDeclaration= `
  declarations: [
    ClientesComponent
  ],
  exports: [
    ClientesComponent
  ],
  `

  appClientes = `
  <app-clientes></app-clientes>`

  importModuleinApp=`
  imports: [
    BrowserModule, 
    ClientesModule
  ],
  `

  importInterface = `
  import { Cliente } from "./clientes/cliente.model";
  `

  importServideAndInterface= `
import { ClientesService } from '../../other/clientes.service';
import {Cliente} from '../../other/clientes/cliente.model';`

  importFormsComponent = `
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
`

  interfaceCliente = `
  export interface Cliente {
    nombre: string, 
    direccion: string,
    edad: number, 
    }`


  codigoService:string = `
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
  `

  codigoTypescriptComponent= `
  import { Component, OnInit } from '@angular/core';
  import { ClientesService } from '../../other/clientes.service';
  import {Cliente} from '../../other/clientes/cliente.model';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';


  @Component({
    selector: 'app-clientes',
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
      this.clienteService.addCliente(this.cliente)
      this.cliente = this.clienteService.newCliente()
    }

    enviar(values){}

  }
`

  templateComponent= `
<div class="c">
<section>
    <div class="container">
        <div class="clientes">
            <h1>Clientes</h1>
            <form [formGroup]="form" (ngSubmit)="enviar(form.value)">
                <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="form-control" 
                placeholder="Ingrese nombre" [(ngModel)]="cliente.nombre"
                formControlName="nombre">
                </div>
                <div class="form-group">
                <label>Dirección</label>
                <input type="text" class="form-control" 
                placeholder="Ingrese dirección" [(ngModel)]="cliente.direccion" 
                formControlName="direccion">
                </div>
                <div class="form-group">
                    <label>Edad</label>
                    <input type="number" class="form-control" 
                    placeholder="Ingrese edad" [(ngModel)]="cliente.edad" 
                    formControlName="edad">
                </div>
                <button type="submit" [disabled]="form.invalid" class="btn-form" (click)="this.nuevoCliente()">Agregar cliente</button>
            </form>
        </div>
        <div class="lista-clientes" *ngIf="clientes.length > 0">
            <h2>Listado de clientes</h2>
            <ul class="list-group">
                <li class="list-group-item" *ngFor="let cliente of clientes">
                    <span>{{cliente.nombre}}</span> | <span>{{cliente.direccion}}</span> | <span>{{cliente.edad}}</span>
                </li>
              </ul>
        </div>
    </div>
</section>
</div>
`

  scss= `
$font: 'Bebas Neue';


*{
    font-family: $font;
}
.c{
    background: #654ea3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #eaafc8, #654ea3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    section{
        padding: 2rem;
        .clientes{
            padding: 1rem;
            background: #F1F1F1;
            box-shadow: 2px 2px 25px #333333;
            border-bottom: 1rem;
        }
        .btn-form{
            padding: 1rem;
            border-radius: .50rem;
            background: $amarillo;
            color: #333333;
            text-transform: uppercase;
            cursor: pointer;
        }
        .btn-form:hover{
            background: #F2D5A0;
        }
        .lista-clientes{
            margin-top: 1.20rem;
            background: #F1F1F1;
            box-shadow: 2px 2px 25px #333333;
            padding: 1rem;
            li{
                text-align: center;
                span{
                    margin-right: 2rem;
                    margin-left: 2rem;
                    text-align: center;
                }
            }        
        }
    }
}`

}
