import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Finished } from './finished.model';
   */

  getPatients() {
    return this.firestore
      .collection('patients')
      .doc('patientData')
      .snapshotCh        .collection('patients')
        .doc('patientData')
        .set(object)
    );
  }

  /**
   * this function usimport { firestore } from 'firebase';
import firebase = require('firebase');

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
   * this used for change le('this is changeLevelToSelect');
   */
  changeLevelToNonSelect() {
    alelect() {
alert('this is changeLevelToNonSelect');

*
   * this used for cha from selecteds used for chelLloNechangeLevelToNonSelect() {
    alert('this is changeLevelToNonSelect');

    var bject = [
      {
        name: 'kamal',
