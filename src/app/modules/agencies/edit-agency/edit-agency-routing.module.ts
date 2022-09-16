import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditAgencyComponent} from './edit-agency.component';

const routes: Routes = [
  {
    path: '',
    component: EditAgencyComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAgencyRoutingModule {}
