import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileService } from './profile.service';
import { FinishedService } from '../finished/finished.service';
import { Finished } from '../finished/finished.model';
import { Router } from '@angular/router';
import { EmailsService } from '../../emails/emails.service';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public _contactForm: FormGroup; //for dealing with the form group
  patients_for_dialog: Finished;

  list: Finished[] = []; //this list will help for change the level
  patients_for_temporary: Finished; //this used for containing the changed values.

  constructor(
    private service: FinishedService,
    private email_service: EmailsService,
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProfileComponent>,
    private _profileService: ProfileService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    //this used for popup the dialog
    this.patients_for_dialog = this.service.getDialog();

    /**
     * this used for taken the complete list of patients.
     * First of all list will modify when changed the level
     * After that this list will replace the databse
     */
    this.service.getPatients().subscribe(actionArray => {
      let patients_data = actionArray.payload.get('data');
      if (patients_data) {
        this.list = patients_data;
      }
    });
  }

  private newMethod() {
    return this;
  }

  onSubmit() {}

  /**
   * this funciton  used for select the non-selected patients
   * this will change the level from 'not-selected' to 'waiting' where the invoked patient's objects
   */
  addSelectLabel(event) {
    this.patients_for_temporary = this.patients_for_dialog;
    this.patients_for_temporary.level = 'waiting';

    if (window.confirm('Are you sure you want to change Level?')) {
      this.list = this.list.filter(
        obj => obj.nic !== this.patients_for_dialog.nic
      );
      this.list.push(this.patients_for_temporary);
      this.service.addPatient({ data: this.list }).subscribe(next => {});
    } else {
      event.confirm.reject();
    }
  }

  /**
   * this fucntion used for reject the patients who were already waiting
   * this will change the level from 'waiting' to 'rejected' where the invoked patient's objects
   */
  addRrejectLabel() {
    this.patients_for_temporary = this.patients_for_dialog;
    this.patients_for_temporary.level = 'not-selected';

    if (window.confirm('Are you sure you want to change Level?')) {
      this.list = this.list.filter(
        obj => obj.nic !== this.patients_for_dialog.nic
      );
      this.list.push(this.patients_for_temporary);
      this.service.addPatient({ data: this.list }).subscribe(next => {});
    }
  }

  /**
   * this fucntion used for mark the patients who has taken the  orders.
   * this will change the level from 'ready' to 'delivered' where the invoked patient's objects
   */
  addDeleveredLabel() {
    this.patients_for_temporary = this.patients_for_dialog;
    this.patients_for_temporary.level = 'delivered';

    if (window.confirm('Are you sure you want to change Level?')) {
      this.list = this.list.filter(
        obj => obj.nic !== this.patients_for_dialog.nic
      );
      this.list.push(this.patients_for_temporary);
      this.service.addPatient({ data: this.list }).subscribe(next => {});
    }
  }

  name: string;
  email: string;

  btnClick(event) {
    this.email = event.email;
    this.name = event.name;
    this.email_service.setEmailAddress(this.email);
    this.email_service.setName(this.name );
    this.dialogRef.close();
    this.router.navigate(['pages/emails']);
  }
}
