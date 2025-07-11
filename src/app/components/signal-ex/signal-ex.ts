import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
  firstName: string = "Chetan";
  productName = "Moto";

  courseName = signal<string>("Angular");

  courseDuration = signal("15 Videos");

  courseDetail = computed(() => this.courseName() + " - " + this.courseDuration());

  constructor(){
    this.firstName = "Rahul";
    console.log(this.firstName);

    setTimeout(() => {
      this.courseName.set("React");
    }, 5000);
    
    
    console.log(this.courseName());
    
  }
}
