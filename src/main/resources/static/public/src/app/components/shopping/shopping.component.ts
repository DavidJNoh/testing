import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {User} from '../../user';
import{Router}  from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  private user:User;

  constructor(private service:ServiceService,
    private _router:Router) { }

  ngOnInit() {
    this.user=this.service.getter();
  }

  processForm(){
    if(this.user.id==undefined){
       this.service.createUser(this.user).subscribe((user)=>{
         console.log(user);
         this._router.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this.service.updateUser(this.user).subscribe((user)=>{
         console.log(user);
         this._router.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
