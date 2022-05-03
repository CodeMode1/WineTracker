// External imports.
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Application imports.
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FavoriteComponent } from './favorites/favorite.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { UserPreferenceComponent } from './user-preferences/user-preference.component';
import { WineDetailComponent } from './wines/wine-detail/wine-detail.component';
import { WineService } from './wines/wine.service';

@NgModule({
    declarations: [
        AppComponent,
        CatalogComponent,
        FavoriteComponent,
        HomeComponent,
        NavMenuComponent,
        ProfileComponent,
        UserPreferenceComponent,
        WineDetailComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'profile', component: ProfileComponent },
			{ path: 'catalog', component: CatalogComponent },
			{ path: 'detail', component: WineDetailComponent },
			{ path: 'detail/:id', component: WineDetailComponent },
            { path: 'favorites', component: FavoriteComponent },
            { path: 'user-preferences', component: UserPreferenceComponent }
        ])
    ],
    providers: [WineService],
    bootstrap: [AppComponent]
})
export class AppModule { }
