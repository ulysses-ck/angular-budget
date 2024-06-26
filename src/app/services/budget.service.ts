import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BudgetService {
	budget: number;
	rest: number;
	private costs$ = new Subject<any>();

	constructor() {
		this.budget = 0;
		this.rest = 0;
	}

	addCost(cost: any) {
		this.rest = this.rest - cost.quantity;
		this.costs$.next(cost);
	}

	getCost(): Observable<any> {
		return this.costs$.asObservable();
	}
}
