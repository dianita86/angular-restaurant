import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from 'app/nosotros/nosotros.component';
import { InicioComponent } from 'app/inicio/inicio.component';
import { ContactComponent } from 'app/contact/contact.component';
import { MenuComponent } from 'app/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
