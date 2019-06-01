import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { BannerResultsComponent } from './banner-results/banner-results.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, WelcomeComponentComponent, BannerResultsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
