import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iinfo } from './info.model';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  constructor(private http: HttpClient) {}
  emailAddress: string;

  sendEmail(obj): Observable<Iinfo> {
    return this.http.post<Iinfo>('http://localhost:3000/sendFormData', obj)
  }

  setEmailAddress(email) {
    this.emailAddress = email;
  }

  getEmailAddress() {
    //alert('this is the service' + this.emailAddress);
    return this.emailAddress;
  }
}
