import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  job="";
  email="";
  done: boolean= false;

  constructor(private dataservice : DataService) { }

  ngOnInit(): void {
  }
  Submit(){
    if(this.email=="" || this.job=="")
      alert("Fields can't be empty!!");
    else{
     const data ={
      email: this.email,
      job: this.job
}

      this.dataservice.createUser(data)
                .subscribe((res : any)=>{
                  console.log(res);
                }) 
                this.done=true;
                this.email=this.job=""; 
    }
  }
}
