import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ListUsersComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ViewUsersComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class UsersModule { }
