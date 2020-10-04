import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/cliente/clientes.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'tutorial', component: TutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
