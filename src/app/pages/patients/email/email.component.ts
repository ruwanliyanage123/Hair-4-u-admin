import { Component, OnInit } from '@angular/core';
import { EmailsService } from '../../emails/emails.service';

@Component({
  selector: 'ngx-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  emailAddress: any;
  constructor(private email_service: EmailsService) {}

  ngOnInit() {
    alert('dfdfdfdf');
    this.emailAddress = this.email_service.getEmailAddress;
    alert(this.emailAddress);
  }
}
