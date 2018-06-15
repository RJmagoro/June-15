import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nev-bar',
  templateUrl: './nev-bar.component.html',
  styleUrls: ['./nev-bar.component.css']
})
export class NevBarComponent implements OnInit {

  @Input() name;
  @Input() page;
  

  @Input()fname;
  @Input()surname;
  @Input()age;
  @Input()date;

  constructor( private router: Router) { 
   }
  

  ngOnInit() {
  }

  navigator() {

    if (name === 'event') {

      this.router.navigate(['details/event']);
      
    }else if (this.name === 'view') {
      
      
      this.router.navigate(['details/view'],{queryParams: {fname: this.fname, surname: this.surname, age: this.age, date: this.date}});

    }
  }

}
