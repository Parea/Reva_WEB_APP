import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  redirect = [null, 'admin', 'directeur', 'manager', 'agent'];

  constructor(
    private authService: AuthService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit() {
    const me = this.authService.me();

    if (me) {this.router.navigate([this.redirect[me.user_type_id] + '/dashboard']); }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    document.getElementById('loadingWrapper2').style.display = 'none';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    console.log('f.username: ', this.f.username.value);
    console.log('f.password', this.f.password.value);
    this.authService.login(this.f.username.value, this.f.password.value)
    .subscribe(
      data => {
        this.loading = false;
        console.log('login data', data);
        this.router.navigate([this.redirect[data.user_type_id] + '/dashboard']);
      },
      error => {
        this.loading = false;
        console.log('login error ', error);
      });
  }
}
