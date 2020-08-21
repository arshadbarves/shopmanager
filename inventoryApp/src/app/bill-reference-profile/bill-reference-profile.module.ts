import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BillReferenceProfilePage } from './bill-reference-profile.page';

const routes: Routes = [
  {
    path: '',
    component: BillReferenceProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BillReferenceProfilePage]
})
export class BillReferenceProfilePageModule {}
