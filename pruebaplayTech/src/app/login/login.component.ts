import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
   
  }


  userData = {
    username: '',
    password: ''
  };

  submitForm(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      console.log('Formulario válido', this.userData);
    }
  }

  preventWhitespace(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
    }
}
}
