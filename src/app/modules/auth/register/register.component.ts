import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../service/auth.service';
import { IUser } from '../../../data/interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  registerUserData: IUser = {
    email: '',
    password: '',
  };

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
    });
  }

  registerUser(): void {
    this.auth.registerUser(this.registerUserData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/form-Builder']);
      },
      (err) => console.log(err)
    );
  }
}
