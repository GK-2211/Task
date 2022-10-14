import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from '../data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
User_info : User[]=[];
dataSource = new MatTableDataSource<User>(this.User_info);

  constructor(private dataservice : DataService) { 
    this.dataservice.getUser()
   .subscribe((res : any)=>{
      var result= res;
      console.log(res);
      this.dataSource.data=res.data;
      })
}
  

  headers=["image","email", "name",]

  ngOnInit(): void {
  }

}


