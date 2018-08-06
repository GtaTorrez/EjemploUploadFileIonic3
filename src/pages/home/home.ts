import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UploadFileProvider } from '../../providers/upload-file/upload-file';
import { Global } from '../../config/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('fileInput') fileInput:ElementRef
  dataUrl:any;
  base:string
  constructor(
  	public navCtrl: NavController,
  	private serve:UploadFileProvider
  	) {
		this.base=`${Global.BASE_URL}:${Global.port}`;
  }

  prepareSave():any{
  	let input = new FormData();
  	input.append('archivo',this.fileInput.nativeElement.files.item(0));
  	console.log(this.fileInput.nativeElement.files.item(0));
  	
  	return input;	
  }

  onSubmit(){
  	const formModel=this.prepareSave();
  	this.serve.postFile(formModel).subscribe(data=>{
  		console.log(data);
  		this.dataUrl=this.base+data;
  	},(err)=>{
  		console.error(err);
  		
  	})
  }

}
