import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  updatedata(item:any){
alert(item)
  }
}
