import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FielsFormAgency} from './model/edit-agency.model';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {AgenciesService} from '../services/agencies.service';

@Component({
  selector: 'app-edit-agency',
  templateUrl: './edit-agency.component.html',
  styleUrls: ['./edit-agency.component.scss']
})
export class EditAgencyComponent implements OnInit {
  form: FormGroup;
  fielsFormAgency = FielsFormAgency;
  id: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private agenciesService: AgenciesService
  ) {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.form = this.fb.group({
      agencia: ['', Validators.required],
      direccion: ['', Validators.required],
      distrito: ['', Validators.required],
      lat: ['', Validators.required],
      lon: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.agenciesService.getAll().subscribe(res => {
      const agency = res.find(item => item.id === this.id);
      if (agency) {
        this.form.setValue({
          agencia: agency.agencia,
          direccion: agency.direccion,
          distrito: agency.distrito,
          lat: agency.lat,
          lon: agency.lon
        });
      }
    });
  }

  back(): void {
    this.router.navigate(['/agencies']);
  }

  updateAgency(): void {
    if (this.form.valid) {
      this.agenciesService.add(this.form.value, this.id).subscribe(res => {
        if (res.response) {
          this.router.navigate(['/agencies']);
        }
      });
    } else {

    }
  }

}
