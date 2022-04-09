import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';



@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
