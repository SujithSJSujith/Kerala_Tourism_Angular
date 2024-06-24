import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DistrictsdetailsComponent } from './pages/districtsdetails/districtsdetails.component';

export const routes: Routes = [
    {
        path : "", component : HomeComponent,
    },
    {
        path : "home", component : HomeComponent,
    },
    {
        path : "districts-details", component : DistrictsdetailsComponent,
    },
    {
        path : "**", component : NotFoundComponent,
    }
];
