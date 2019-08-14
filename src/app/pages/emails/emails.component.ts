import { Component, OnInit } from '@angular/core';
import { EmailsService } from './emails.service';

@Component({
  selector: 'ngx-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  emailAddress: string;
  constructor(private email_service: EmailsService) {}

  ngOnInit() {
    this.emailAddress = this.email_service.getEmailAddress();
    //alert(this.emailAddress);
  }
}
