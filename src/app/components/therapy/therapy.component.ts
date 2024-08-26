import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-therapy',
  templateUrl: './therapy.component.html',
  styleUrls: ['./therapy.component.scss']
})
export class TherapyComponent implements AfterViewInit {

  @ViewChild('gridContainer', { static: false }) gridContainer!: ElementRef;
  currentTranslate = 0;

  ngAfterViewInit() {
    const gridContainerEl = this.gridContainer.nativeElement;
    const items = Array.from(gridContainerEl.children) as HTMLElement[];
    const containerWidth = gridContainerEl.parentElement?.clientWidth || window.innerWidth;
    
    const itemWidth = items[0]?.clientWidth || 300;
    const itemHeight = items[0]?.clientHeight || 100;
    const gap = 10; // Asegúrate de que este valor coincida con el gap definido en el CSS
    
    // Calcular el ancho total del contenedor basado en la cuadrícula
    let totalWidth = 0;
    let rowHeight = 0;
    items.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      totalWidth = Math.max(totalWidth, itemRect.right);
      rowHeight = Math.max(rowHeight, itemRect.bottom);
    });
    
    gridContainerEl.style.width = `${totalWidth}px`;

    // Calcular el máximo desplazamiento
    const maxTranslate = containerWidth - totalWidth;

    const updateTransform = () => {
      gridContainerEl.style.transform = `translateX(${Math.max(maxTranslate, Math.min(0, this.currentTranslate))}px)`;
    };

    document.querySelector('.prev')?.addEventListener('click', () => {
      if (this.currentTranslate < 0) {
        this.currentTranslate += (itemWidth + gap);
        if (this.currentTranslate > 0) {
          this.currentTranslate = 0;
        }
        updateTransform();
      }
    });

    document.querySelector('.next')?.addEventListener('click', () => {
      if (this.currentTranslate > maxTranslate) {
        this.currentTranslate -= (itemWidth + gap);
        if (this.currentTranslate < maxTranslate) {
          this.currentTranslate = maxTranslate;
        }
        updateTransform();
      }
    });

    window.addEventListener('resize', () => {
      const newContainerWidth = gridContainerEl.parentElement?.clientWidth || window.innerWidth;
      const newMaxTranslate = newContainerWidth - totalWidth;
      this.currentTranslate = Math.max(newMaxTranslate, Math.min(0, this.currentTranslate));
      updateTransform();
    });
  }
}
