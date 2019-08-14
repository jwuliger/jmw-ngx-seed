import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

export const APP_ROUTES: Routes = [
	{ path: '', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
	{ path: '**', component: NotFoundComponent }
];
