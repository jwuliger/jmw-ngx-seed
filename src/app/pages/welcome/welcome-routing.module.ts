import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome.component';

// TODO: Refactor where and how the material modules are used.
import { MaterialModule } from '../../shared/material.module';

const routes: Routes = [{ path: '', component: WelcomeComponent }];

@NgModule({
	declarations: [WelcomeComponent],
	imports: [RouterModule.forChild(routes), MaterialModule],
	exports: [RouterModule]
})
export class WelcomeRoutingModule {}
