import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  
  userId: string='';

  
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId= data['id'];
    });
    if(this.userId){
        this.userService.deleteUser(this.userId).subscribe(data=>{
          console.log("success");
          
        },err=>{
          console.log(err);
        })
    }
  }

}
