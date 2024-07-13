import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  num = 0;
  value=""
  getname(name:any,ok:any){
    alert(name);
    alert(ok);
  }
  counter(type:any){
    type=="plus"?this.num++:this.num--;
 
  }
 

  getvalue(val:any){
  //  alert(this.value);
   this.value=val;
  }
}
