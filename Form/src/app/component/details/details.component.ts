import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  fname : '';
  surname : '';
  age  : '';
  date : '';
  
  pages = [
   
    { name: 'view', page: 'view'},
    { name: 'event',page: 'event'}
    
  ];

  constructor( private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params =>{

      this.fname = params['fname'];
      this.surname = params['surname'];
      this.age = params['age'];
      this.date = params['date'];



  });
  console.log(this.fname);
  console.log(this.surname);
  console.log(this.age);
  console.log(this.date);
  
  }
    
  }
  
  


