import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  formGroup: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
}> = new FormGroup({
    username: new FormControl<string>("", {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    password: new FormControl<string>("", {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
  });

  error: string | null = null;

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.error = 'Usuário ou senha inválida.';
      return;
    }

    const { username, password } = this.formGroup.value;

    const auth = this.authenticationService.login(username!, password!);

    if (!auth) {
      this.error = 'Usuário ou senha inválida.';
      return;
    } else {
      this.error = null;
    }
  }
}
