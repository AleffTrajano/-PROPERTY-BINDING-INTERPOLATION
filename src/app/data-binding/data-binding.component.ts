import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.com';

  urlImagem = 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FBrasil&psig=AOvVaw1RKF4hLCco3AXiNvN2qlyE&ust=1538499055891722';
  getValor(){
    return 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
