import { Component, OnInit } from '@angular/core';
import { ManufactureService } from './manufacture.service';
import { Manufacture } from './manufacture.model';

@Component({
  selector: 'ngx-manufacture',
  styles: [],
  template: `
    <ng2-smart-table
      (createConfirm)="addData($event)"
      (deleteConfirm)="deleteData($event)"
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
    /**
     * this funciton will add data from firebase what we are stored in while adding
     */
    this.service.getManufacture().subscribe(arr => {
      let manu_list = arr.payload.get('manufact');
      if (manu_list) {
        this.manu = manu_list;
      }
    });
  }

  settings = {
    mode: 'internal',
    attr: {
      id: '',
      class: ''
    },
    actions: {
      // add: false,
      // edit: false,
      // delete: false
    },
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
        title: 'Shop Name',
        hideSubHeader: true
      },
      ownername: {
        title: 'Owner Name',
        hideSubHeader: true
      },
      nic: {
        title: 'NIC',
        hideSubHeader: true
      },
      contactno: {
        title: 'ContactNo',
        hideSubHeader: true
      },
      address: {
        title: 'Address',
        hideSubHeader: true
      },
      email: {
        title: 'Email',
        hideSubHeader: true
      }
    }
  };

  /**
   * this function will send the manu list into addManufacture() function
   * always the list will store inside the firebase reiterately.
   */
  addData(data) {
    this.manu.push(data.newData);
    console.log(this.manu);
    this.service.addManufacture({ manufact: this.manu }).subscribe(next => {
      data.confirm.reject();
    });
  }

  /**
   * this function for delete table data. after clicking the delete option.
   * ann event will pass after click the delete button.
   * find the relavent nic by event.data.nic
   * then remove the relavent object from the source array
   * after remain array will store in the firebase.
   */
  deleteData(event) {
    if (window.confirm('Are you sure you want to Delete?')) {
      this.manu = this.manu.filter(obj => obj.nic !== event.data.nic);
      this.service.addManufacture({ manufact: this.manu }).subscribe(next => {
        event.confirm.reject();
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
}
