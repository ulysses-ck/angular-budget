import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputCostComponent } from './components/costs/input-cost/input-cost.component';
import { InputBudgetComponent } from './components/input-budget/input-budget.component';
import { CostsComponent } from './components/costs/costs.component';

const routes: Routes = [
	{ path: '', redirectTo: '/inputbudget', pathMatch: 'full' },
	{ path: 'inputbudget', component: InputBudgetComponent },
	{ path: 'costs', component: CostsComponent },
	{ path: '**', redirectTo: '/inputbudget', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
