import { Component, OnInit } from '@angular/core';
import { BillReferencesService } from '../services/bill-references.service';


@Component({
  selector: 'app-bill-reference-profile',
  templateUrl: './bill-reference-profile.page.html',
  styleUrls: ['./bill-reference-profile.page.scss'],
})
export class BillReferenceProfilePage implements OnInit {

  constructor( private billReferenceService: BillReferencesService) {
  
   }

   public OnAddBillReference (){
     var billReference  = {
        billDocumentID: "BISM01",
        billNumber: "1001",
     //   billDate: Date.now,
        vendorName: "Bismillah Store",
        address: "Thiruppathur",
        phoneNumber: "9886956170",
        city: "thirupathur",
        notes: "everything alright",
        billReferenceImagePath: null
      }
     this.billReferenceService.addBillReference(billReference).then(function (data) {
       console.log("Bill Added successfully");       
     })
     .catch (function(){
       console.log("Failed to add bill")
     });
   }

   public OnGetList() 
   {
     //this.billReferenceService.getBillReferenceList();
   }

  ngOnInit() {
  }

}
