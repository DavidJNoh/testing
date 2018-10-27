import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {User} from '../../user';
import{Router}  from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private users: User[];

  constructor(private service:ServiceService,
    private _router:Router) { }

  ngOnInit() {
    this.service.getUsers().subscribe((users)=>{
      console.log(users);
      this.users=users;
    },(error)=>{
      console.log(error);
    })
  }
  deleteUser(user){
    this.service.deleteUser(user.id).subscribe((data)=>{
        this.users.splice(this.users.indexOf(user),1);
    },(error)=>{
      console.log(error);
    });
  }

   updateUser(user){  
     this.service.setter(user);
     this._router.navigate(['/form']);


   }
   newUser(){
   let user = new User();
    this.service.setter(user);
     this._router.navigate(['/form']);
   
   }
}
