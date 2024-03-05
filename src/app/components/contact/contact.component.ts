import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  users!: User[];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.users = this.userService.getAll();
  }

  delete(id: number){
    this.userService.deleteUser(id)
  }

}
