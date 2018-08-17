import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  productName: string = 'Samsung Galaxy';

  constructor() {
    // this.productName = 'Samsung Galaxy';
  }

  onSubmit(e) {
    console.log('Form submitted.');
    console.log('event object:', e);
  }

  onNameChange(e) {
    console.log(e.target.value);
  }
}
