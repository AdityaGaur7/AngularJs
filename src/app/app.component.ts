import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule}from "@angular/forms"
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,RouterLink],
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
