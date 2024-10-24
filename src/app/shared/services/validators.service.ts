import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

    firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    cantBeStrider = (control: FormControl): ValidationErrors | null => {
        const value = control.value.trim().toLowerCase();
        if (value === 'strider') {
            return {
                noStrider: true,
            }
        }
        return null;
    }

    
    isValidField(form: FormGroup, field: string): boolean | null {
        return form.controls[field].errors
            && form.controls[field].touched
    }


    getFieldError(form: FormGroup, field: string): string | null {
        if (!form.contains(field)) return null;
        const errors = form.controls[field].errors || {};
        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return 'Este campo es requerido';

                case 'minlength':
                    return `El campo debe tener mínimo ${errors['minlength'].requiredLength} caracters.`;
            }
        }
        return '';
    }


}