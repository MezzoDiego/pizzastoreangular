import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  // constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    // this.authService.logout();
    // this.router.navigateByUrl('login');
  }
}
