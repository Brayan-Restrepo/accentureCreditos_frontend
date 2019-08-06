import { AbstractControl } from "@angular/forms";

export class MyValidators {
    
    static date(c: AbstractControl): { [key: string]: boolean } {
        return Object.prototype.toString.call(c.value) !== '[object Date]' ? { 'dateInvalid': true } : null;
    }

    static enteroPositivo(c: AbstractControl): { [key: string]: boolean } {
        const  patron = /^\d*$/;
        return !patron.test(c.value) ? { 'dateInvalid': true } : null;
    }

}