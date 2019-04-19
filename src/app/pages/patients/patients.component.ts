import { Component, OnInit } from '@angular/core';
import { PatientsService } from './patients.service';
import { Patients } from './patients.model';

@Component({
  selector: 'ngx-patients',
  styles: [],
  template: `
    <router-outlet></router-outlet>
  `
})
export class PatientsComponent implements OnInit {
  list: Patients[] = [];
  constructor(private service: PatientsService) {}

  ngOnInit() {
    this.service.getPatients().subscribe(actionArray => {
      let a = actionArray.payload.get('data');
      if (a) {
        this.list = a;
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
      name: {
        title: 'Name'
      },
      nic: {
        title: 'NIC'
      },
      address: {
        title: 'Address'
      },
      email: {
        title: 'Email'
      },
      haircolor: {
        title: 'Hair Color'
      },
      measurements: {
        title: 'Measurements'
      },
      hairstyle: {
        title: 'Hair Style'
      },
      dob: {
        title: 'DOB'
      },
      gender: {
        title: 'Gender'
      },
      reports: {
        title: 'Reports'
      }
    }
  };

  addData(event) {
    this.list.push(event.newData);
    console.log(this.list);
    this.service.addPatient({ data: this.list }).subscribe(next => {
      event.confirm.reject();
    });
  }

  deleteData(event) {
    if (window.confirm('Are you sure you want to Delete?')) {
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
}
