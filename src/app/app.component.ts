import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginUserComponent, UserLoged } from './login-user/login-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [LoginUserComponent, NavBarComponent, FooterComponent],
  template:
  `
  <main class="main">
  <div>
  <app-nav-bar></app-nav-bar>
  @if (true == true) {
    <Login-user></Login-user>
  }
  @else {
    <div>Bienvenido</div>
  }
 <app-footer></app-footer>
  </div>
</main>`
})
export class AppComponent {
  title = 'Anpi';
}
