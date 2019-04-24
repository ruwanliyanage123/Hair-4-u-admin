import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Orders } from './orders.model';

@Component({
  selector: 'ngx-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  constructor(private service: OrdersService) {}

  order_list: Orders[];

  ngOnInit() {
    this.service.getOrders().subscribe(actionArray => {
      let patients_data = actionArray.payload.get('data');
      if (patients_data) {
        this.order_list = patients_data;
      }
    });
  }
}
