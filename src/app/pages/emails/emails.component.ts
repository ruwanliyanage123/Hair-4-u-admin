import { Component, OnInit } from '@angular/core';
import { EmailsService } from './emails.service';
import { Subscription } from 'rxjs';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup
} from '@angular/forms';
import 'ckeditor';
import './ckeditor.loader';

@Component({
  selector: 'ngx-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  infoForm: FormGroup;
  public subscription: Subscription;
  emailAddress: string;
  nameA: string;
  constructor(private email_service: EmailsService, private fb: FormBuilder) {}

  ngOnInit() {
    this.emailAddress = this.email_service.getEmailAddress();
    this.nameA = this.email_service.getName();
    //console.log(this.emailAddress);
    // alert(this.emailAddress);
    this.infoForm = new FormGroup({
      email: new FormControl(this.emailAddress, {
        validators: [Validators.required, Validators.email]
      }),
      subject: new FormControl('For inform about the wig order', {
        validators: [Validators.required]
      }),
      content: new FormControl(
        `
       Dear ${this.nameA},\n
       We are from the apeksha Hospital.
       Congradulations! your wig order has received for manufacture.If you want to know about any other informations you can contact us via 
       0772308519 or this slsiyapatha@gmail.com
       Thank you!\n
       `,
        { validators: [Validators.required] }
      )
    });
  }

  get name() {
    return this.infoForm.get('name');
  }
  get email() {
    return this.infoForm.get('email');
  }

  sendMail() {
    console.log(this.infoForm.value);
    this.subscription = this.email_service
      .sendEmail(this.infoForm.value)
      .subscribe(
        data => {
          let msg = data['message'];
          alert(msg);
          // console.log(data, "success");
        },
        error => {
          console.error(error, 'error');
        }
      );
  }

  ngOnDestroy() {}
}
