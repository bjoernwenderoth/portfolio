import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'imprint', component: ImprintComponent}
];
