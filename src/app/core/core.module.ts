import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule
  ],
  bootstrap: [InicioComponent]
})
export class CoreModule { }
