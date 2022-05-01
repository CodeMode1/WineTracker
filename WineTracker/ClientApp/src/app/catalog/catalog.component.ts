// External imports
import { Component, OnInit } from '@angular/core';

// Application imports
import { Wine } from '../wines/wine.model';
import { WineService } from '../wines/wine.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
    public wines: Wine[] = [];

    constructor(private readonly _wineService: WineService) { }

    public ngOnInit(): void {
        this._wineService.getWines()
            .subscribe(
                result => {
                    this.wines = result;
                },
                error => {
                    console.log('error get wines');
                }
            );
    }
}
