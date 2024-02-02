import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {TestimonialsComponent} from './components/testimonials/testimonials.component';
import {ServicesComponent} from './components/services/services.component';
import {ExperiencesComponent} from './components/experiences/experiences.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {BannerPubComponent} from './components/banner-pub/banner-pub.component';
import {CardComponent} from './components/card/card.component';
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { HeadingsComponent } from './components/headings/headings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestimonialsComponent,
    ServicesComponent,
    ExperiencesComponent,
    PortfolioComponent,
    BannerPubComponent,
    CardComponent,
    HeadingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
