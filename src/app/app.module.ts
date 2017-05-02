import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CarouselComponent } from './inicio/carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './inicio/banner/banner.component';
import { AcercaComponent } from './inicio/acerca/acerca.component';
import { ResenaComponent } from './inicio/resena/resena.component';
import { MenusComponent } from './inicio/menus/menus.component';
import { ImagenBaseComponent } from './nosotros/imagen-base/imagen-base.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    CarouselComponent,
    MenuComponent,
    ContactComponent,
    BannerComponent,
    AcercaComponent,
    ResenaComponent,
    MenusComponent,
    ImagenBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
