import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ApiService} from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  uri = 'http://localhost:3000';
  FileForm: FormGroup;
  isImageSaved: boolean;
  cardImageBase64: {};
  unlink :String
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private bs: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.createfileForm();
  }

  createfileForm(){
    this.FileForm = this.formBuilder.group({
      picture: [''],  
      picture_hidden: [''],
    });
  }

  uploadFile(fileInput: any) {
    var file = fileInput.target.files[0]
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          // Return Base64 Data URL
          const imgBase64Path = e.target.result;
          var base64result_arr = imgBase64Path.split(',');
          var base64result_str = '';
          for (var i = 1; i < base64result_arr.length; i++) {
              base64result_str += base64result_arr[i];
          }
          // console.log(base64result_str)
          var  data = base64result_str
          this.resultfile(data);
          const picobj = {
            base64 : data,
            filetype: file.type
          } 
          console.log(picobj)
          // return this
          //       .http
          //       .post(`${this.uri}/uploadfiles`, picobj)
          //       .subscribe(res => {
          //         // this.resultfile(res);
          //         console.log(res)
          //       });
        };
      };
  });
  }

  resultfile(e) {
    console.log(e);
    this.cardImageBase64 = e;
    // this.unlink = e.filename
    this.isImageSaved = true
    
  } 

  onSubmit() {
    var data = this.FileForm.value
    console.log(data)
    this.bs.addfiile(data)
    this.router.navigate(['file-details'])
  }

}






