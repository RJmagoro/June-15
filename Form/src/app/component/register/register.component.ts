import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  fname : string;
  surname : string;
  age  : string;
  date : string;

  constructor( private router: Router) { }

  ngOnInit() {
   
  }
  // booking(){
    
    
  // }
  onlogin(){
    this.router.navigate(['details'],{queryParams: {fname: this.fname, surname: this.surname, age: this.age, date: this.date}});

  
    


    
  }
  

}
