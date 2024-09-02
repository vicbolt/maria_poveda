import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
      const formData = this.contactoForm.value;

      // Configura la URL de tu backend en Heroku
      const url = 'https://mariapovedapsicologa-82ed1f098820.herokuapp.com/send-email';

      // Realiza la solicitud HTTP POST
      this.http.post(url, formData, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe(
        response => {
          console.log('Correo enviado con éxito:', response);
        },
        error => {
          console.error('Error al enviar el correo:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
