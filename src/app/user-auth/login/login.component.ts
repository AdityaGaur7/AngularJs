import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  value=""
  getname(name:any,ok:any){
    alert(name);
    alert(ok);
  }

  getvalue(val:any){
  //  alert(this.value);
   this.value=val;
  }
}
