import { NgModule } from '@angular/core';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CostsComponent } from './components/costs/costs.component';
import { InputBudgetComponent } from './components/input-budget/input-budget.component';
import { InputCostComponent } from './components/costs/input-cost/input-cost.component';
import { ListCostsComponent } from './components/costs/list-costs/list-costs.component';

@NgModule({
	declarations: [
		AppComponent,
		CostsComponent,
		InputBudgetComponent,
		InputCostComponent,
		ListCostsComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
