import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private dataservice : DataService) { }


  ngOnInit(): void {
  

  this.dataservice.getUser()
   .subscribe((res : any)=>{
      console.log(res.data);
      })

}
}