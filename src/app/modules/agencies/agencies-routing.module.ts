import {RouterModule, Routes} from '@angular/router';
import {AgenciesComponent} from './agencies.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AgenciesComponent
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit-agency/edit-agency.module').then(m => m.EditAgencyModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule{}
