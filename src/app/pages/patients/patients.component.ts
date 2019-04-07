import { Component, OnInit } from '@angular/core';
import { PatientsService } from './patients.service';
import { Patients } from './patients.model';

@Component({
  selector: 'ngx-patients',
  styles:[],
  template: `
  <ng2-smart-table [settings]="settings" [source]="list">
  </ng2-smart-table>
  `
})
export class PatientsComponent implements OnInit {
  
  list : Patients[];
  constructor(private service : PatientsService) { }

  ngOnInit() {
    this.service.getPatients().subscribe(actionArray =>{
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Patients;
      })
    });
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
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

}
