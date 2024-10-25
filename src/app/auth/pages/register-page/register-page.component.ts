import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';
//import * as customValidator from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService
  
  ) { }

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern)]],
    //email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidatorService()]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  });

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field)

  }

  onSave() {
    this.myForm.markAllAsTouched
    console.log(this.myForm.value);

  }

}
