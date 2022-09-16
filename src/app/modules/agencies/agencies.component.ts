import {Component, OnInit} from '@angular/core';
import {AgenciesService} from './services/agencies.service';
import {Router} from '@angular/router';
import {AgencyDTO, DefaulLocation} from './model/agencies.model';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})
export class AgenciesComponent implements OnInit {
  agenciesData$ = this.agenciesService.getAll();
  lat = DefaulLocation.LAT;
  lon = DefaulLocation.LON;
  imagesMap = new Map<number, string>();
  imagesSource = [
    'assets/photos/1.jpeg',
    'assets/photos/2.jpeg',
    'assets/photos/3.jpeg',
    'assets/photos/4.jpeg',
    'assets/photos/5.jpeg'
  ];

  constructor(private agenciesService: AgenciesService, private router: Router) {
    this.imagesSource.forEach( (imagen, index) => {
      this.imagesMap.set(index + 1, this.imagesSource[index]);
    });
  }

  ngOnInit(): void {
    // this.imagesMap.set(1, 'assets/photos/2.jpeg');
  }

  handleRow(data: AgencyDTO): void {
    this.lat = data.lat;
    this.lon = data.lon;
  }

  handleDetail(id: number): void {
    this.router.navigate([`/agencies/edit/${id}`]);
  }

}
