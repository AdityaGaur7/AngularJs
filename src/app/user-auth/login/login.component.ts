import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  num = 0;
  show = false;
  value = '';
  color = 'iii';
  users = ['anil', 'sunil', 'suresh', 'ramesh', 'rajesh'];
  getname(name: any, ok: any) {
    alert(name);
    alert(ok);
  }
  counter(type: any) {
    type == 'plus' ? this.num++ : this.num--;
  }
  change() {
    this.show = !this.show;
  }

  getvalue(val: any) {
    //  alert(this.value);
    this.value = val;
  }
}
