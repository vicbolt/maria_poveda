import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { TherapyComponent } from './components/therapy/therapy.component';
import { ServicesComponent } from './components/services/services.component';
import { ToolsComponent } from './components/tools/tools.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    QuoteComponent,
    AboutmeComponent,
    TherapyComponent,
    ServicesComponent,
    ToolsComponent,
    FormComponent,
    FooterComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
