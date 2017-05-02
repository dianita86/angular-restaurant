import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
 ver: string;
 producto: string;
 texto: string;
 imagen: string;
 imagen1: string;
 imagen2: string;
 imagen3: string;

  constructor() {
    this.ver = 'Ver más';
    this.producto = 'producto';
    this.texto = 'texto';
    this.imagen = '';
    this.imagen1 = 'http://www.publicdomainpictures.net/pictures/80000/velka/fresh-tomato-juice.jpg#.WQf3Bv9kPZI.link';
    this.imagen2 = 'http://www.publicdomainpictures.net/pictures/170000/velka/beer-1462977849MwW.jpg#.WQf6Wa3DrJ4.link';
    this.imagen3 = 'http://www.publicdomainpictures.net/pictures/160000/velka/orange-drink-at-the-pool-1457022634sVH.jpg#.WQf6hEFSN4I.link';
  }


  ngOnInit() {
  }

}
