import { Component, OnInit } from '@angular/core';
import { ManufactureService } from './manufacture.service';
import { Manufacture } from './manufacture.model';

@Component({
  selector: 'ngx-manufacture',
  styles: [],
  template: `
    <ng2-smart-table
      (createConfirm)="addData($event)"
      [settings]="settings"
      [source]="manu"
    >
    </ng2-smart-table>
  `
})
export class ManufactureComponent implements OnInit {
  manu: Manufacture[] = [];

  constructor(private service: ManufactureService) {}

  ngOnInit() {
    this.service.getManufacture().subscribe(arr => {
      let manu_list = arr.payload.get('event');
      if (manu_list) {
        this.manu = manu_list;
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
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  addData(data) {
    this.manu.push(data.newData);
    //console.log(this.manu);
    this.service.addManufacture({ event: this.manu }).subscribe(next => {
      data.confirm.reject();
    });
  }
}
