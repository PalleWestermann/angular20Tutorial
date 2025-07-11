import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {

  isParaVisible: boolean = true;

  cityList: string[] = ["pune","Mumbai","Panji", "Nagpur"];

  hideP() {
    this.isParaVisible = false;
  }
  showP() {
    this.isParaVisible = true;
  }
}
