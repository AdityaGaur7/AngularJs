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
  value = "";
   userdata:any =[];
   submit(val:any){
    this.value=val;
this.userdata.push({id:this.userdata.length,name:this.value})

   }
   remove(id:any){
      // this.userdata.splice(id,1)
      this.userdata = this.userdata.filter((item:any) => item.id !== id);


   }
  
}

