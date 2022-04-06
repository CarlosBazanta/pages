import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './core/pages/contact/contact.component';
import { ExamplesComponent } from './core/pages/examples/examples.component';
import { InicioComponent } from './core/pages/inicio/inicio.component';
import { ProfileComponent } from './core/pages/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
