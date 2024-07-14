import { Component,OnInit } from '@angular/core';
import { ActivatedRoute ,RouterLink} from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
 
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
}
