import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFormFatherComponent } from './my-form-father/my-form-father.component';
import { MyFormChildComponent } from './my-form-father/my-form-child/my-form-child.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, MyFormChildComponent, MyFormFatherComponent,CustomInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
