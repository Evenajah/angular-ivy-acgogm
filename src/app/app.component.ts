import { Component, VERSION } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      CustomDetails: this.formBuilder.array([])
    });
  }
  addinput() {
    this.customDetails.push(new FormControl());
  }
  delInput(index) {
    this.customDetails.removeAt(index);
  }
  get customDetails() {
    return this.form.get('CustomDetails') as FormArray;
  }
}
