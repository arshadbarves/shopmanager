import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {  Bill } from '../models/bill-reference';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class BillReferencesService {

public billProfile: firebase.firestore.DocumentReference;
public billProfileListRef: firebase.firestore.CollectionReference;
public currentUser: firebase.User;

  constructor() { 
    this.billProfileListRef = firebase
          .firestore()
          .collection(`/BillProfile`);
  }

  addBillReference(bill :any ) : Promise<void>
  {
    bill.createdDate = firebase.firestore.Timestamp.fromDate(new Date());
    this.billProfile = firebase.firestore().collection('/BillProfile').doc(bill.docId);
    return this.billProfile.set(bill);
      // return this.billProfileListRef.add({
      //   billDocumentID: billProfile.billDocumentID,
      //   billNumber: billProfile.billNumber,
      //   billDate: billProfile.billDate,
      //   vendorName: billProfile.vendorName,
      //   address: billProfile.address,
      //   phoneNumber: billProfile.phoneNumber,
      //   city: billProfile.city,
      //   notes: billProfile.notes,
      //   billReferenceImagePath: null
      // });
  }
  
  getBillReferenceList (noOfRecords: number): Promise<any>{
    return new Promise( ( resolve, reject) => { 
      firebase.firestore().collection("BillProfile").limit(noOfRecords).get({source: "default"})
      .then((querySnapshot) => {
      let arr = [];
      querySnapshot.forEach(function (doc) {
          var obj = JSON.parse(JSON.stringify(doc.data()));
          obj.$key = doc.id
          arr.push(obj);
      });

      if (arr.length > 0) {
          resolve(arr);
      } else {
          console.log("No such document!");
          resolve(null);
      }


  })
  .catch((error: any) => {
      reject(error);
  });
});
    // .then(function(querySnapshot) {
    //   console.log(querySnapshot.size);
    //   querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // })
  } 
}
