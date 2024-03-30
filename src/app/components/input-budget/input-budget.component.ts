import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
	selector: 'app-input-budget',
	templateUrl: './input-budget.component.html',
	styleUrls: ['./input-budget.component.css'],
})
export class InputBudgetComponent {
	quantity: number;
	isIncorrectQuantity: boolean;

	constructor(private _budgetService: BudgetService, private router: Router) {
		this.quantity = 0;
		this.isIncorrectQuantity = false;
	}

	add() {
		if (this.quantity > 0) {
			this.isIncorrectQuantity = false;
			this._budgetService.budget = this.quantity;
			this._budgetService.rest = this.quantity;
			this.router.navigate(['/costs']);
		} else {
			this.isIncorrectQuantity = true;
		}
	}
}
