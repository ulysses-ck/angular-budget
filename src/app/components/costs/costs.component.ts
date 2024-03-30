import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
	selector: 'app-costs',
	templateUrl: './costs.component.html',
	styleUrls: ['./costs.component.css'],
})
export class CostsComponent {
	constructor(private _budgetService: BudgetService) {}

	ngOnInit(): void {
		console.log(this._budgetService.budget);
	}
}
