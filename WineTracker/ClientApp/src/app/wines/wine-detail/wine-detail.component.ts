// External imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Application imports
import { Wine } from '../wine.model';
import { WineService } from '../wine.service';
import { WineTrait } from '../winetrait.enum';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {
	public wine: Wine | null = null;

	public isInCreateMode = false;
	public activeTrait = WineTrait.Sweetness;

	constructor(
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _wineService: WineService) { }

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
}
