import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  getname(name:any,ok:any){
    alert(name);
    alert(ok);
  }
  getdata(val:any){
    console.log(val);
  }
}
