import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  testString: string;
  validateForm: FormGroup;
  constructor(
    private router: Router,
    private httpService: HttpService,
    private fb: FormBuilder) { }

    ngOnInit(): void {
      this.validateForm = this.fb.group({
        userName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        remember: [true]
      });
      this.testString = 'testing...';
      }

    login(): void {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      var body = JSON.stringify({
        "test": 'test'
      });
      this.httpService.postData('login', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (data['code'] == 1) {
              this.testString = "test successfully!!!"
          }
          console.log('######################link finish############################');
        },
        error => {
          console.log(error);
        }
      );
    }
}
