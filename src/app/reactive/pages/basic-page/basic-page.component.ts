import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';


const rtx590 = {
  name: 'RTX590',
  price: 1999,
  inStorage: 5
}



@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService) { }

  ngOnInit(): void {
    this.myForm.reset(
      rtx590
    );
  }


  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })

  fInicial = {
    price: 10,
    inStorage: 10
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field)
  }

  getFieldError(field: string): string | null {
    return this.validatorsService.getFieldError(this.myForm, field)
  }


  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset({ inStorage: 1 });
  }

}
