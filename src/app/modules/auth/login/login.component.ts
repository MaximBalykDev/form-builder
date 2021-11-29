import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup
  loginIsInvalid: boolean = false;

  loginUserData:any = {}
  constructor(private _auth: AuthService,
    private _router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group( {
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      password: [null, [
        Validators.minLength(6),
        Validators.required
      ]]
    })
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['./formBuilder'])
        },
        err =>
          this.loginIsInvalid = true
      )
  }

}
