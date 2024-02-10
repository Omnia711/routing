import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  age: string = '';
  email: string = '';
  password: string = '';

  checkInput() {
    // Check if input empty
    this.name = this.name.trim() ? this.name.trim() : '';
    this.age = this.age.trim() ? this.age.trim() : '';
    this.email = this.email.trim() ? this.email.trim() : '';
    this.password = this.password.trim() ? this.password.trim() : '';
}
}
