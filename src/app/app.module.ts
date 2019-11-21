import { ApiService } from './servicios/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { NavComponent } from './componentes/nav/nav.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    PaginaPrincipalComponent,
    NavComponent,
    DetallesComponent,
    IniciarSesionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
