import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgenciesRoutingModule} from './agencies-routing.module';
import {AgencyRowComponent} from './components/agency-row/agency-row.component';

@NgModule({
  declarations: [
    AgencyRowComponent
  ],
  exports: [
    AgencyRowComponent
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule
  ]
})
export class AgenciesModule {
}
