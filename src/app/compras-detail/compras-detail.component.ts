import { Component, OnInit } from '@angular/core';
import { Compra } from '../domain/compra';
import { COMPRAS } from '../domain/mock-compras';

@Component({
  selector: 'app-compras-detail',
  templateUrl: './compras-detail.component.html',
  styleUrls: ['./compras-detail.component.css']
})
export class ComprasDetailComponent implements OnInit {
  
  compras : Compra[] = COMPRAS;
  compra : Compra = new Compra();

  constructor() { }

  addCompra(){
    let novaCompra = new Compra();
    novaCompra.id = this.compra.id;
    novaCompra.discricao = this.compra.discricao;
    this.compras.push(novaCompra);
  }

  ngOnInit() {
  }

}
