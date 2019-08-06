import { AbstractControl } from "@angular/forms";

export class MyValidators {
    
    static date(c: AbstractControl): { [key: string]: boolean } {
        return Object.prototype.toString.call(c.value) !== '[object Date]' ? { 'dateInvalid': true } : null;
    }

}