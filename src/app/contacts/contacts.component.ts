import { Component, Input, OnInit } from '@angular/core';
import { User,UserI} from '../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  UserInfo:UserI=new User("","","","");
  notsubmitted=true;


  constructor() { }

  ngOnInit(): void 
  {

  }
  onSubmit()
  {
    this.notsubmitted=false;
  }

}
