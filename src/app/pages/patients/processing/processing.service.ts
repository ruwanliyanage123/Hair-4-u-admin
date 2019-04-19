import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Processing } from './processing.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessingService {
  patients: Processing;

  constructor(private firestore: AngularFirestore) {}

  /**
   * this is for the get informations about patients
   */

  getPatients() {
    return this.firestore
      .collection('patients')
      .doc('patientData')
      .snapshotChanges();
  }

  addPatient(object) {
    return from(
      this.firestore
        .collection('patients')
        .doc('patientData')
        .set(object)
    );
  }
}
