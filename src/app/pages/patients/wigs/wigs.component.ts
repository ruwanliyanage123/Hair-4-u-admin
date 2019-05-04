import { Component, OnInit } from '@angular/core';
import { Finished } from '../finished/finished.model';
import { FinishedService } from '../finished/finished.service';

@Component({
  selector: 'ngx-wigs',
  templateUrl: './wigs.component.html',
  styleUrls: ['./wigs.component.scss']
})
export class WigsComponent implements OnInit {
  list: Finished[] = [];
  waiting_list: Finished[] = [];
  ready_list: Finished[] = [];
  delivered_list: Finished[] = [];

  constructor(private service: FinishedService) {}

  ngOnInit() {
    this.service.getPatients().subscribe(actionArray => {
      let patients_data = actionArray.payload.get('data');
      if (patients_data) {
        this.list = patients_data;
        this.waiting_list = this.list.filter(
          Level => Level.level === 'waiting'
        );
        this.ready_list = this.list.filter(Level => Level.level === 'ready');
        this.delivered_list = this.list.filter(
          Level => Level.level === 'delivered'
        );
      }
    });
  }
}
