import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCostComponent } from './input-cost.component';

describe('InputCostComponent', () => {
	let component: InputCostComponent;
	let fixture: ComponentFixture<InputCostComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [InputCostComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(InputCostComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
