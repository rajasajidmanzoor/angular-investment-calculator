import { Component, signal } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { type InvestmentResults } from './datatypes.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {

  resultsData = signal<InvestmentResults[] | undefined>(undefined);


}
