import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AgencyDTO} from '../../model/agencies.model';

@Component({
  selector: 'app-agency-row',
  templateUrl: './agency-row.component.html',
  styleUrls: ['./agency-row.component.scss']
})
export class AgencyRowComponent implements OnInit {
  @Input() set dataRow(data: { agency: AgencyDTO, imagesMap: Map<number, string> }) {
    this.data = data.agency;
    this.imageUrl = data.imagesMap.get(data.agency.id);
  }

  @Output() clickRow = new EventEmitter<AgencyDTO>();
  @Output() clickDetail = new EventEmitter<number>();
  data: AgencyDTO = {} as AgencyDTO;
  imageUrl: string | undefined;

  ngOnInit(): void {
  }

  handleRow(agency: AgencyDTO): void {
    this.clickRow.emit(agency);
  }

  handleDetail(id: number): void {
    this.clickDetail.emit(id);
  }
}
