import { Component, OnInit } from '@angular/core';
import { Articles } from '../../Articles';
import { AurevoirService } from '../aurevoir.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  nom: string;
  utilisateurs: Array<string>;
  articles: Array<Articles>;
  bonjour: string;
  password:string;
  customers:string;

  constructor(private aurevoirService: AurevoirService) {
    this.customers = aurevoirService.getCustomers();
    this.nom = "BattlePoap";
    this.utilisateurs = [];
    this.bonjour="";
    this.utilisateurs.push("bibi");
    this.utilisateurs.push("bubu");
    this.utilisateurs.push("bobo");
    this.utilisateurs.push("baba");
    this.utilisateurs.push("bébé");
    this.utilisateurs.push("byby");

    const a1 = new Articles("iPhone",500);
    const a2 = new Articles("Macbook",1000);
    const a3 = new Articles("Homepod", 0);
    this.articles = [];
    this.articles.push(a1);
    this.articles.push(a2);
    this.articles.push(a3);

    this.password = "";
  }

  ngOnInit() {
  }

  clic () {
    console.log("j'ai été cliqué");
    this.bonjour = "bonjour !!!!"
  }

  submitForm(){
    console.log("password: " + this.password);
  }
  
}
