import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {

    // Este tipo de validador es cuando se espera una validación desde el backend,
    // para ver por ejemplo si un email fue tomado.

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const email = control.value;

        console.log({ email });

        return of({
            emailTaken: true
        }).pipe(
            delay(2000)
        );


    }


}