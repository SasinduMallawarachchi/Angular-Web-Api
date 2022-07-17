import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { interval, take, lastValueFrom } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userId:any;
  userDetails:any;
  dataLoaded:boolean=false;
  editUserForm: FormGroup = new FormGroup({});
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService,private formBulider:FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data=>{
      this.userId=data['id'];
    });
    if(this.userId ! == ''){
      //view user details
        this.userService.viewuser(this.userId).toPromise().then(data=>{
            this.userDetails = data;
            Object.assign(this.userDetails, data);
            console.log(this.userDetails);

            //build edit form  
              this.editUserForm = this.formBulider.group({
                'username' : new FormControl(this.userDetails.name),
                'email' : new FormControl(this.userDetails.email),
                'phone' : new FormControl(this.userDetails.phone),
              })
              this.dataLoaded = true;
            
            
        }).catch(err =>{
          console.log(err);
        })
    }
  }
  updateUser(){
    console.log(this.editUserForm.value);
    this.userService.updateUser(this.userId, this.editUserForm.value)
  }

}
