import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes.component'
import { ClientesService } from 'src/app/other/clientes.service';
import { UppercasePipe } from '../../pipes/uppercase.pipe';


@NgModule({
  declarations: [
    ClientesComponent,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ClientesComponent,
    UppercasePipe
  ],  
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
