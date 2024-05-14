import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent {
  static contemEspacos(control: AbstractControl) {
    if (!control.value){
      return null;
    }

    let resultado = control.value.indexOf(' ') !== -1;

    if (resultado) {
      control.setErrors({ contemEspacos: true });
      return { contemEspacos: true };
    } else {
      control.setErrors(null);
      return null;
    }
  }
}
