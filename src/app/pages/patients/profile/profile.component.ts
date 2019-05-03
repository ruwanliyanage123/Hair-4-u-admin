import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileService } from './profile.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public _contactForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProfileComponent>,
    private _profileService: ProfileService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this._contactForm = this._formBuilder.group({
      ID: [this.data.ID],
      FirstName: [this.data.FirstName, [Validators.required]],
      LastName: [this.data.LastName, [Validators.required]],
      Contact: [this.data.Contact, [Validators.required]],
      Email: [this.data.Email, [Validators.required]]
    });
  }

  onSubmit() {}
}
