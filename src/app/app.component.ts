import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { ChildComponent } from './child/child.component';
import {FormsModule}from "@angular/forms"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = "name";
  updatedata(item:any){
alert(item)
 this.data = item
  }
}
