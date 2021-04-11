import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NarBarComponent } from './nar-bar/nar-bar.component';

@NgModule({
  declarations: [AppComponent, PropertyListComponent, PropertyCardComponent, NarBarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
