import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  toggleFlag: boolean = true;

  signup() {
    this.toggleFlag = !this.toggleFlag;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
