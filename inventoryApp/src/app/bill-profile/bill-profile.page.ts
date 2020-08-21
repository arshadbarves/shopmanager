import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { BillReferencesService } from '../services/bill-references.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';

 
@Component({
  selector: 'app-bill-profile',
  templateUrl: './bill-profile.page.html',
  styleUrls: ['./bill-profile.page.scss'],
})
export class BillProfilePage implements OnInit {

  bill_reference_form: FormGroup;

  someTextUrl;
  selectedPhoto;
  loading;
  currentImage;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private billProfileService: BillReferencesService,
    public camera: Camera
  ) { }

  ngOnInit() {

    this.bill_reference_form = this.formBuilder.group({
      docId: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      name: new FormControl('', Validators.required),
      billNo: new FormControl('', Validators.required),
      billDate: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      notes: new FormControl(''),
      billRef: new FormControl(''),
      email: new FormControl('', Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      image: new FormControl('')
    });

  }

  onSubmit(values){
    values.imgURL = 'shop-manager/bills/' + values.docId +'.png';
   // values.billDate = new Date(values.billDate).toLocaleDateString();

   this.billProfileService.addBillReference(values);
    this.upload(values.imgURL);
    console.log("Successful Entry....");
    console.log(values);
    this.router.navigate(["/home"]);
  }

  grabPicture() {

    const options: CameraOptions = {
      quality: 100,
      targetHeight: 200,
      targetWidth: 200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      
      this.selectedPhoto  = this.dataURItoBlob('data:image/jpeg;base64,' + imageData);

    }, (err) => {
      console.log('error while taking picture...', err);
    });
  }

  dataURItoBlob(dataURI) {
    // codej adapted from:
    //  http://stackoverflow.com/questions/33486352/
    //cant-upload-image-to-aws-s3-from-ionic-camera
        let binary = atob(dataURI.split(',')[1]);
        let array = [];
        for (let i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
      };

      upload(imageName) {
        if (this.selectedPhoto) {
          var uploadTask = firebase.storage().ref().child(imageName)
            .put(this.selectedPhoto);
          uploadTask.then(this.onSuccess, this.onError);
        }
      }

      onSuccess = snapshot => {
        this.currentImage = snapshot.downloadURL;
        this.loading.dismiss();
      };
      
      onError = error => {
        console.log("error", error);
        this.loading.dismiss();
      };
}
