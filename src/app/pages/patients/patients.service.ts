import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Patients } from './patients.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  //patients
  patients : Patients;

  constructor(private firestore: AngularFirestore) { }

  /**
   * this is for the get informations about patients
   */

   getPatients(){
     return this.firestore.collection('patients').doc('patientData').snapshotChanges();
   }

   addPatient(object){
     return from(this.firestore.collection('patients').doc('patientData').set(object))
   }
}
