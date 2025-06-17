import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<{
    initialInvestment:number,
    annualInvestment:number,
    expectedReturn:number,
    duration:number,
  }>();

  initialInvestment = signal('1000');
  annualInvestment = signal('200');
  expectedReturn = signal('5');
  duration = signal('10');
  results:any;

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment(), 
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(), 
    });
  }
}
