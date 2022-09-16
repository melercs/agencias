import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAgencyComponent } from './edit-agency.component';
import {EditAgencyRoutingModule} from './edit-agency-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EditAgencyComponent
  ],
  imports: [
    CommonModule,
    EditAgencyRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditAgencyModule { }
