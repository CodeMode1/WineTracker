// External imports.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Application imports.
import { Wine } from './wine.model';

@Injectable({
    providedIn: 'root'
})
export class WineService {
    private _wineUrl = "assets/wine/wines.json";

    constructor(private _httpClient: HttpClient) { }

    public getWines(): Observable<Wine[]> {
        return this._httpClient.get<Wine[]>(this._wineUrl)
            .pipe(
                tap(wines => console.log("Wines: ", JSON.stringify(wines))),
				map(wines => wines.map(wine => new Wine(wine))),
				catchError(this.handleHttpError)
            );
	}

	public getWine(wineId: string): Observable<Wine> {
		return this.getWines()
			.pipe(
				map((wines: Wine[]) => wines.find(wine => wine.id === wineId))
			);
	}

	private handleHttpError(httpError: HttpErrorResponse): Observable<never> {
		const errorMessage = httpError.error instanceof ErrorEvent
			// Error from client or network request.
			? `Error type: ${httpError.error.type}, error message: ${httpError.error.message}`
			// Backend returned an unsuccessful response status. Body may contain cause of failure.
			: `Server returned status: ${ httpError.status }, error message: ${ httpError.message }`;

		console.error(errorMessage);
		return throwError(new Error(errorMessage));
	}
}
