import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Finished } from './finished.model';

@Injectable({
  providedIn: 'root'
})
export class FinishedService {
  patients: Finished;

  patients_for_dialog: Finished;

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

  /**
   * this function used for get and display data from table
   */
  setDialog(object: Finished) {
    this.patients_for_dialog = object;
  }

  /**
   * this function used for get and display data from table
   */
  getDialog() {
    return this.patients_for_dialog;
  }

  /**
   * this used for change level from non-selected to selected in database
   */
  changeLevelToSelect() {
    alert('this is changeLevelToSelect');
  }

  /**
   * this used for change level from selected to non-selected in database
   */
  changeLevelToNonSelect() {
    alert('this is changeLevelToNonSelect');
  }

  changeLevelToDelivered() {
    alert('this is changeLevelToDelivered');
  }
}
