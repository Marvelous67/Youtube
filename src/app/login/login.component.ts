import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
// import { isStandalone } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  // standalone: true,
})
export class LoginComponent {

  constructor(private _formBuilder: FormBuilder, public b : Router) {}
  public email: string = '';
  public password: string = '';
  public vv: string = '';
  showFiller = false;
  expand1: boolean = true;
  isMenuOpen: boolean = true;
  LoaderPro: boolean = true;
  nnOnInit(): void {
    this.toggleMenu();
  }
  toggleMenu() {
    this.expand1 = !this.expand1;
    this.isMenuOpen = !this.isMenuOpen;
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  isOptional = true;
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  Next(): void {
    this.vv = this.email;
  }


  showPassword: boolean = false;
  Hide() {
    this.showPassword = !this.showPassword;
  }

  Login() {
    this.LoaderPro = !this.LoaderPro;
    let ban = setTimeout(() => {
      this.LoaderPro = true;
      this.b.navigate(['/Home']);
    }, 5000);

  }
}
