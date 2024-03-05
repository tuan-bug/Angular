import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {id: 1, name: 'Jone', full_name: 'Mary Jone', phone: 977, address: 'Thái Nguyen'},
    {id: 2, name: 'Jone', full_name: 'Mary Jone', phone: 9775, address: 'Thái Nguyen'},
    {id: 3, name: 'Jone', full_name: 'Mary Jone', phone: 9772, address: 'Thái Nguyen'},
    {id: 4, name: 'Jone', full_name: 'Mary Jone', phone: 9771, address: 'Thái Nguyen'},
    {id: 5, name: 'Jone', full_name: 'Mary Jone', phone: 9779, address: 'Thái Nguyen'},

  ]

  constructor() { }


  getAll(): User[]{
    return this.users;
  }

  addUser(user: User){
    this.users.push(user);
  }

  deleteUser(id: number){
    const index = this.users.findIndex(user=>user.id === id);
    if(index !== -1){
      this.users.splice(index,1)
    }
  }
}
