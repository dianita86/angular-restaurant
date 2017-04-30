import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from 'app/nosotros/nosotros.component';
import { InicioComponent } from 'app/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
