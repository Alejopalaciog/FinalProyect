import { DetallesComponent } from './componentes/detalles/detalles.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  {path: 'iniciarsesion', component: IniciarSesionComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'detalles', component: DetallesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
