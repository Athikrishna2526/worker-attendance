import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-servant',
  templateUrl: './register-servant.component.html',
  styleUrls: ['./register-servant.component.scss']
})
export class RegisterServantComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onRegister() {
      this.router.navigate(['/dashboard']);
  }
}
