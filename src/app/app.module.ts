import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './core/pages/inicio/inicio.component';
import { ExamplesComponent } from './core/pages/examples/examples.component';
import { ProfileComponent } from './core/pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ExamplesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
