// tslint:disable: no-string-literal

import 'hammerjs';

import { ApplicationRef, enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createNewHosts } from '@angularclass/hmr';

import { AppBrowserModule } from './app/app.browser.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

// document.addEventListener('DOMContentLoaded', () => {
// 	platformBrowserDynamic()
// 		.bootstrapModule(AppModule)
// });

async function main(): Promise<NgModuleRef<AppBrowserModule>> {
	const ngModuleRef = await platformBrowserDynamic().bootstrapModule(AppBrowserModule);
	const appRef = ngModuleRef.injector.get(ApplicationRef);

	if (module['hot']) {
		module['hot'].accept();

		module['hot'].dispose(async () => {
			const elements = appRef.components.map(c => c.location.nativeElement);
			const makeVisible = createNewHosts(elements);

			ngModuleRef.destroy();

			makeVisible();
		});
	}

	console.log('AppBrowserModule Bootstrapped!', ngModuleRef);

	return ngModuleRef;
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', main);
} else {
	main();
}
