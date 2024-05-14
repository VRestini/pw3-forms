import { CustomValidatorComponent } from './../validator/custom-validator/custom-validator.component';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  ocultarSenha = true;
  constructor(private formBuilder: FormBuilder){}

  cadastroForm = this.formBuilder.group({

    nome : this.formBuilder.control('', [Validators.required, Validators.maxLength(35), Validators.minLength(5)]),
    email : this.formBuilder.control('', [Validators.required, Validators.email, Validators.maxLength(40)] ),
    usuario : this.formBuilder.control('', [Validators.required, Validators.maxLength(15), CustomValidatorComponent.contemEspacos]),
    senha : this.formBuilder.control('', [Validators.required, Validators.pattern("(?=.*[A-Z])(?=.*[!.@#$&*])(?=.*[0-9])(?!.* ).{8,16}$")]),
    confirmarSenha : this.formBuilder.control('', [Validators.required])

  });

  onEnviar(){
    console.table(this.cadastroForm.value);
  }
}
