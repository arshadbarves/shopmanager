import { Component, OnInit } from '@angular/core';
import { BillReferencesService } from '../services/bill-references.service';
import { ParametersHelperService } from '../shared/services/parameters-helper.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-bill-profile-list',
  templateUrl: './bill-profile-list.page.html',
  styleUrls: ['./bill-profile-list.page.scss'],
})
export class BillProfileListPage implements OnInit {

  private billProfiles = null;
  constructor(private billProfileService: BillReferencesService, private parameterHelperService: ParametersHelperService, 
    private rourter: Router,
    private location: Location ) { }

  ngOnInit() {
    const billProfiles = this.billProfileService.getBillReferenceList(15).then(
      (data) => {this.billProfiles = data;}
    );
  }

  billProfileSelected(billProfile) {
    this.parameterHelperService.setParams(billProfile.docId);
  }

  Close(){
    console.log(this.rourter);
    this.rourter.navigate(["/home"]);
    
  }
}
