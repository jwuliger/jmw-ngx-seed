import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
	imports: [
		// The AppServerModule should import the AppModule followed
		// by the ServerModule from @angular/platform-server.
		AppModule,
		ServerModule,
		ModuleMapLoaderModule // <-- *Important* enables lazy-loaded routes to work
	],
	// Since the bootstrapped component is not inherited from the
	// imported AppModule, it needs to be repeated here.
	bootstrap: [AppComponent]
})
export class AppServerModule {}
