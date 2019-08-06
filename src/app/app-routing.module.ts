import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroClienteComponent } from './page/registro-cliente/registro-cliente.component';

const routes: Routes = [
  {
    path: 'registro_cliente',
    component: RegistroClienteComponent
  },
  { path: '', redirectTo: 'registro_cliente', pathMatch: 'full' },
  { path: '**', redirectTo: 'registro_cliente',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
