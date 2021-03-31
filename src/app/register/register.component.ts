import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private registerService: RegistrationService,
              private fb: FormBuilder,
              private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  register(): void{
    const newUser = this.form.value;
    if ( newUser.username && newUser.password && newUser.email ){
      this.registerService.register(newUser.username, newUser.email, newUser.password).pipe(first())
        .subscribe(
          (data: HttpResponse<any>) => {
            alert(`Success!! You can login now`);
            this.router.navigateByUrl(`/home`);
          },
          error => {
            alert(`Something went wrong :(`);
          }
        );
    }
  }
}
