import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSecionComponent } from './componentes/inicio-secion/inicio-secion.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { NavComponent } from './componentes/nav/nav.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSecionComponent,
    RegistrarComponent,
    PaginaPrincipalComponent,
    NavComponent,
    DetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
