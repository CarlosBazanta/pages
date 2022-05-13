import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  {path: 'examples', loadChildren: ()=>import('./pages/examples/examples.module').then(m=>m.ExamplesModule)},
  {path: 'profile', loadChildren: ()=>import('./pages/profile/profile.module').then(m=>m.ProfileModule)},
  {path: 'contact', loadChildren: ()=>import('./pages/contact/contact.module').then(m=>m.ContactModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
