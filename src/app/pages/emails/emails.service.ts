import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  constructor() {}
  emailAddress: string;

  setEmailAddress(email) {
    this.emailAddress = email;
  }

  getEmailAddress() {
    //alert('this is the service' + this.emailAddress);
    return this.emailAddress;
  }
}
