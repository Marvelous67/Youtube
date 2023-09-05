import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatRadioModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [
    MatSidenavModule,
    MatRadioModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    MatCheckboxModule

  ]
})
export class MugiwaraModule { }
