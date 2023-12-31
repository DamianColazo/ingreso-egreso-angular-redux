import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  constructor(private authService: AuthService, private router: Router) {}
  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['login']);
    });
  }
}
