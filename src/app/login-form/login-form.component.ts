import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    const val = this.form.value;
    if ( val.username && val.password ){
      this.authService.login(val.username, val.password).pipe(first())
        .subscribe(
          (data: HttpResponse<any>) => {
            localStorage.setItem(`jwt_token`, data.headers.get('Authorization'));
            localStorage.setItem(`expires_at`, data.headers.get('expiresAt'));
            this.router.navigateByUrl(`/home`);
          },
          error => {
            console.log(error);
          });
    }
  }

}
