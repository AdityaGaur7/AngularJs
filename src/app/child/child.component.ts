import { Component ,EventEmitter,OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
 
  @Output() updatedataevent = new EventEmitter<any>();
 ngOnInit(): void {
     
 }
}
