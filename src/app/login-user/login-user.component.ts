import { Component } from '@angular/core';

@Component({
  selector: 'Login-user',
  imports: [],
  template: `
  <p>login-user works!</p>
`,
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
user = ""

}
export class UserLoged {
  isLoged = Boolean
}
