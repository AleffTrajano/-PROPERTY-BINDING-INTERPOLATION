import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  pessoa:any ={
    nome:"abc",
    idade:20
  }

  botaoClicado(){
    alert('botão clicado');
  }

  valorAtual:string='';
  valorSalvo

  isMouseOver:boolean=false;


  onkeyUp(evento:KeyboardEvent){

   this.valorAtual=((<HTMLInputElement> evento.target).value)
   

  }

  salvarValor(valor){
    this.valorSalvo=valor;
  }

  

  onMouseOverOut(){
    this.isMouseOver=!this.isMouseOver;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
