import { Component, OnInit, Input } from '@angular/core';
import { Amigo } from '../domain/amigo';
import { AMIGOS } from '../domain/mock-amigo';

@Component({
  selector: 'app-amigo-detail',
  templateUrl: './amigo-detail.component.html',
  styleUrls: ['./amigo-detail.component.css']
})
export class AmigoDetailComponent implements OnInit {
  
  amigos : Amigo[] = AMIGOS;
  amigo : Amigo = new Amigo();

  constructor()

  ngOnInit() {
  }

  addAmigo(){
    console.log(this.amigo.nome);
  }