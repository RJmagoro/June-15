import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ConstructorProvider } from '@angular/core/src/di/provider';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  fname:'';
  surname: '';
  age: '';
  date: '';

 

  constructor( private route: ActivatedRoute) { 

  
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{

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
