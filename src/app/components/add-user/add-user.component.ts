import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  eName: string = '';
  name: FormControl;

  ngOnInit() {
    this.name = new FormControl('');
  }

  setValueInName(): void {
    this.eName = 'Some Pvt Ltd.';
  }

  submit() {
    if (this.name.value === '') {
      this.name.setValue('Iam');
    } else {
      let str = this.name.value;
      str = str.charAt(0).toUpperCase().concat(str.slice(1, str.length));
    }
    if (this.eName === '') {
      this.setValueInName();
    }
    alert(`${this.name.value} working for ${this.eName}`);
  }
}
