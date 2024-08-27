import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    {
      question: '¿Es normal estar nervioso en la primera consulta?',
      answer: 'Es completamente normal sentirse nervioso antes de la primera consulta. La ansiedad suele disminuir a medida que te sientes más cómodo con el proceso.',
      expanded: false
    },
    {
      question: '¿Cuánto tiempo dura la terapia?',
      answer: 'La duración de la terapia puede variar dependiendo de las necesidades individuales y los objetivos del tratamiento. En general, las sesiones suelen durar entre 45 y 60 minutos.',
      expanded: false
    },
    {
      question: '¿Cuál es la diferencia entre un psicólogo y un psiquiatra?',
      answer: 'Los psicólogos se especializan en la terapia y el asesoramiento psicológico, mientras que los psiquiatras son médicos que pueden recetar medicamentos y tratar trastornos mentales desde una perspectiva médica.',
      expanded: false
    },
    {
      question: '¿Es confidencial lo que hablo en terapia?',
      answer: 'Sí, todo lo que hablas en terapia es confidencial, excepto en situaciones donde hay riesgo de daño para ti o para otros.',
      expanded: false
    },
    {
      question: '¿Cuántas sesiones necesito para ver resultados?',
      answer: 'La cantidad de sesiones necesarias varía según cada persona y su situación. Algunas personas pueden notar mejoras después de unas pocas sesiones, mientras que otras pueden requerir un tratamiento más prolongado.',
      expanded: false
    },
    {
      question: '¿Puedo combinar la terapia con otros tratamientos?',
      answer: 'Sí, en muchos casos es posible combinar la terapia con otros tratamientos como medicación, ejercicios o cambios en el estilo de vida, siempre y cuando lo coordines con tu terapeuta.',
      expanded: false
    },
    {
      question: '¿Qué pasa si tengo una emergencia fuera de terapia?',
      answer: 'En caso de emergencia, es importante que contactes a servicios de emergencia locales o acudas a la sala de urgencias más cercana. La terapia es un espacio de apoyo, pero no sustituye la atención urgente.',
      expanded: false
    },
    {
      question: '¿Cómo puedo prepararme para la primera sesión?',
      answer: 'Para tu primera sesión, intenta pensar en tus objetivos y expectativas. No es necesario prepararse en detalle, pero tener una idea de lo que quieres abordar puede ser útil para comenzar.',
      expanded: false
    }
  ];

  toggle(faq: any) {
    // Toggle the selected FAQ
    faq.expanded = !faq.expanded;
    
    // Optionally, you can close other boxes
    this.faqs.forEach(item => {
      if (item !== faq) {
        item.expanded = false;
      }
    });
  }
}
