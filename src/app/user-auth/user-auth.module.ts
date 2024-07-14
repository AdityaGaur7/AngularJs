import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule,FormControl,FormGroup } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,FormControl,FormGroup
  ]
})
export class UserAuthModule {}
