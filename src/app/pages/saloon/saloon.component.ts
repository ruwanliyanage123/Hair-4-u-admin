import { Component, OnInit } from '@angular/core';
import { Saloon } from './saloon.model';
import { SaloonService } from './saloon.service';

@Component({
  selector: 'ngx-saloon',
  styles: [],
  template: `
    <ng2-smart-table
      [settings]="settings"
      (createConfirm)="addData($event)"
      (editConfirm)="editData($event)"
      (deleteConfirm)="deleteData($event)"
      [source]="saloon"
    ></ng2-smart-table>
  `
})
export class SaloonComponent implements OnInit {
  saloon: Saloon[] = [];

  constructor(private service: SaloonService) {}

  ngOnInit() {
    this.service.getSaloon().subscribe(arr => {
      let sal = arr.payload.get('saloon_list');
      if (sal) {
        this.saloon = sal;
      }
    });
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      shopname: {
        title: 'Shop Name'
      },
      ownername: {
        title: 'Owner Name'
      },
      nic: {
        title: 'NIC'
      },
      contactnumber: {
        title: 'Contact Number'
      },
      address: {
        title: 'Address'
      },
      email: {
        title: 'Email'
      }
    }
  };

  addData(event) {
    this.saloon.push(event.newData);
    this.service.addSaloon({ saloon_list: this.saloon });
  }

  deleteData(event) {
    if (window.confirm('Are you sure you want to Delete?')) {
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
  editData($event) {}
}
