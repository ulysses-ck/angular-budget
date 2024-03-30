import { Component } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
	selector: 'app-input-cost',
	templateUrl: './input-cost.component.html',
	styleUrls: ['./input-cost.component.css'],
})
export class InputCostComponent {
	nameCost: string;
	quantity: number;
	isFormIncorrect: boolean;
	textIncorrect: string;

	constructor(private _budgetService: BudgetService) {
		this.nameCost = '';
		this.quantity = 0;
		this.isFormIncorrect = false;
		this.textIncorrect = '';
	}

	addCost() {
		if (this.quantity > this._budgetService.rest) {
			this.isFormIncorrect = true;
			this.textIncorrect = 'The amount is greater than the rest';
			return;
		}

		if (this.nameCost === '' || this.quantity <= 0) {
			this.isFormIncorrect = true;
			this.textIncorrect = 'Name cost or quantity incorrect';
		} else {
			// Object
			const COST = {
				nameCost: this.nameCost,
				quantity: this.quantity,
			};

			// Send object
			this._budgetService.addCost(COST);

			// reset form

			this.isFormIncorrect = false;
			this.nameCost = '';
			this.quantity = 0;
		}
	}
}
