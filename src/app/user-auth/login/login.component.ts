import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {


  loginform = new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')
  })

   loginuser(){
    console.log(this.loginform.value);
    
   }
  
}

