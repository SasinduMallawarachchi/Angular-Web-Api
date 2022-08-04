import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})


export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private FormBuilder : FormBuilder, private UserService:UserService) { }

  ngOnInit(): void {
    this.addUserForm = this.FormBuilder.group({
      'username' : new FormControl(''),
      'email' : new FormControl(''),
      'phone' : new FormControl('')
    })
  }
  
  createuser(){
    this.UserService.addUser(this.addUserForm.value).subscribe(data=>{
      console.log("user created");
      alert("User Created Successfully");
    },err=>{
      console.log(err);
    })
    console.log(this.addUserForm.value);
  }
  
}
