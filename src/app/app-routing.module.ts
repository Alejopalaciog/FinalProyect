
import { SaveComponent } from './components/save/save.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { CellListComponent } from './components/cell-list/cell-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/user/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cell-list', component: CellListComponent },
  {path: 'modal-delete', component: ModalDeleteComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'save', component: SaveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
