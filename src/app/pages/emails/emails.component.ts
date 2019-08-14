import { Component, OnInit } from '@angular/core';
import { EmailsService } from './emails.service';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  public subscription: Subscription;
  emailAddress: string;
  constructor(private email_service: EmailsService, private fb: FormBuilder) {}

  ngOnInit() {
    this.emailAddress = this.email_service.getEmailAddress();
    //alert(this.emailAddress);
  }

  infoForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]]
  });

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
