import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser'
import { Global} from '../../config/config';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  fileUrl:any;
  response:any;
  constructor(public navCtrl: NavController,
    private transfer: FileTransfer, private file: File,
    private fileChooser: FileChooser
  ) {
    
  }
  chooseFile(){

    this.fileChooser.open()
    .then(uri => {
      this.fileUrl=uri;
      console.log(uri)
    })
    .catch(e => console.log(e));
  }
  uploadFile() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey:'archivo',
      httpMethod:'POST',
      chunkedMode: false,
      headers: {}
    }
  
    fileTransfer.upload(this.fileUrl,`${Global.BASE_URL}:${Global.port}/upload`, options)
     .then((data) => {
       this.response=data;
     }, (err) => {
       this.response=err;
       // error
     })
  }
}
