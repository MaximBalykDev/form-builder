import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup

  registerUserData: any = {}
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

  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/formBuilder'])
        },
        err => console.log(err)
      )
  }
}
