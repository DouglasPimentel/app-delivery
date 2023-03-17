import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string | undefined;

  constructor(private authenticationService: AuthenticationService) {  }

  ngOnInit(): void {
    const token = JSON.parse(this.authenticationService.getToken()!);
    this.username = token.Username;
  }

  logout(): void {
    this.authenticationService.logoutSession();
  }
}
