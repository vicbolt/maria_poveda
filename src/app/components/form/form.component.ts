import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      motivo: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactoForm.valid) {
      // Aquí se enviaría el formulario a través de un servicio, por ejemplo.
      console.log(this.contactoForm.value);
      // Lógica para enviar el correo electrónico
    } else {
      console.log('Formulario inválido');
    }
  }
}
