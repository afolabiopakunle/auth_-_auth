import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      agree: ['', Validators.required],
    })
  }

  canDeactivate() {
    if(this.form.dirty) {
      return confirm('Are you sure you want leave page')
    }
    return true
  }

  submit() {
    console.log(this.form.value)
  }

}