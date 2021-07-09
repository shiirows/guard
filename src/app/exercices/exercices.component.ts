import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {

  public mdp: Passe = new Passe();
  
  constructor() { }

  ngOnInit(): void {
  }
  passew() {
    // form submitted
    console.log(this.mdp)
}
}
export class Passe {
  Email:any;
  Password:any;
  ConfirmPassword:any;
}
