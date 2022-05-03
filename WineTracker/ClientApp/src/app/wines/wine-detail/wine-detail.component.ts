// External imports.
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Application imports.
import { Wine } from '../wine.model';
import { WineService } from '../wine.service';
import { WineTrait } from '../winetrait.enum';
import { WineType } from '../winetype.model';
import { WineTypeValue } from '../winetypevalue.enum';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {
	public wine: Wine | null = null;
	public wineTypeItems: WineType[] = [];

	public isInCreateMode = false;
	public activeTrait = WineTrait.Sweetness;

	constructor(
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _wineService: WineService) {

		this.setWineTypeItems();
	}

	public ngOnInit(): void {
		const wineId = this._activatedRoute.snapshot.params['id'];
		this.isInCreateMode = wineId != undefined
			? false
			: true;

		if (this.isInCreateMode) {
			this.wine = new Wine();
		} else {
			this._wineService.getWine(wineId)
				.subscribe(
					result => {
						this.wine = result;
					},
					error => {
						console.log(`Error getWine() ${error.message}`);
					}
				);
		}
	}

	public toggleTrait(trait: WineTrait): void {
		this.activeTrait = trait;
	}

	public setWineTypeItems(): void {
		this.wineTypeItems.push(new WineType({ value: WineTypeValue.Red, label: "Red", isSelected: true }));
		this.wineTypeItems.push(new WineType({ value: WineTypeValue.White, label: "White", isSelected: false }));
		this.wineTypeItems.push(new WineType({ value: WineTypeValue.Rose, label: "Rose", isSelected: false }));
		this.wineTypeItems.push(new WineType({ value: WineTypeValue.Sparkling, label: "Sparkling", isSelected: false }));
	}
}
