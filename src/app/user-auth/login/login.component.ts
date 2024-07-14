import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsdinrPipe } from '../../pipes/usdinr.pipe';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,UsdinrPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {


  userlogin(item:any){
    console.log(item);
    
  }

  
}

