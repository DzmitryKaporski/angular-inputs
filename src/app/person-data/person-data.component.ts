import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-data',
  templateUrl: './person-data.component.html',
  styleUrls: ['./person-data.component.scss'],
})
export class PersonDataComponent implements OnInit {

  @Input('name') public personName: string = 'Guest'
  @Input('age') public personAgeValue: string | number = 25
  @Input('step') public personAgeStep: string | number = 1

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.personAgeValue = Number(this.personAgeValue) + Number(this.personAgeStep)
  }
  decrement(): void {
    this.personAgeValue = Number(this.personAgeValue) - Number(this.personAgeStep)
  }

}
