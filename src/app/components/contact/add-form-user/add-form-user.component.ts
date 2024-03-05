import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form-user',
  templateUrl: './add-form-user.component.html',
  styleUrls: ['./add-form-user.component.scss']
})
export class AddFormUserComponent {
  users!: User[];
  constructor(private router: Router ,private formBuilder: FormBuilder, private userService: UserService){}

  ngOnInit(): void {
    this.users = this.userService.getAll();
  }

  //domaim/10/tuan => dùng params
  //domain?id=10&name=tuan => dùng query params
  formAddUser = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    phone: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
    address: ["",]
  })
  get form() {
    return this.formAddUser.controls;
  }

  onSubmit(): void {
    console.log(this.formAddUser)
    const firstName = this.formAddUser.get('firstName')?.value;
    const lastName = this.formAddUser.get('lastName')?.value;
    const phone = this.formAddUser.get('phone')?.value;
    const address = this.formAddUser.get('address')?.value;

    if (firstName && lastName && phone && address) {
      const user = {
        id: this.users.length + 1,
        name: firstName,
        full_name: lastName,
        phone: Number(phone),
        address: address,
      };
  
      this.userService.addUser(user);
      this.router.navigate(['contact'])
    }
    
  }
}
