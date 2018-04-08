import { PostsServiceService } from './posts-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [ PostsServiceService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
