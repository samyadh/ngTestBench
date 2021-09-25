import { NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LandingComponent],
  imports: [BrowserModule, LandingRoutingModule],
  providers: [],
  bootstrap: [LandingComponent],
})
export class LandingModule {}
