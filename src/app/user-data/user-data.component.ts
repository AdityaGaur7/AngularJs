import { Component } from '@angular/core';

@Component({
  selector: 'userdata',
  standalone: true,
  imports: [],
  template: `
    <p class="ok">
      user-data works!
    </p>
  `,
  styles: `.ok{
    color:red;
  }
  `
})
export class UserDataComponent {

}
