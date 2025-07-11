import { getLocaleFirstDayOfWeek, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, 
    LowerCasePipe, TitleCasePipe, SlicePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements 
  OnInit, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  div1ClassName = signal<string>("");

  firstName: string = "Chetan";
  courseName: string = "Angular 20 tutorial";
  rollNoList = [11,12,13,14,15,16,17];

  isDiv2Green: boolean = false;

  constructor() {
    console.log("constructor");
    
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    // Unsubscribe
    // Restrict user from navigating
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    // To Deal With ViewVhild
    // Sometimes also to Subscribe
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
    
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit");
    
  }
  ngOnInit(): void {
    console.log("ngOnInit");
    // Mostly used to Trigger API calls
    // To subscribe
  }

  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }

  toggleDiv2Color() {
    this.isDiv2Green = ! this.isDiv2Green;
  }
}
