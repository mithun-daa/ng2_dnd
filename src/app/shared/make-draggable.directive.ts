import { Directive , Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[makeDraggable]'
})
export class MakeDraggable {
  @Input('makeDraggable') data: any;
  
  constructor(private _elementRef: ElementRef) {}
  
  ngOnInit() {
    // Get the current element
    let el = this._elementRef.nativeElement.querySelector('li');
    
    // Set the draggable attribute to the element
    el.draggable = 'true';
    
    // Set up the dragstart event and add the drag-src CSS class 
    // to change the visual appearance. Set the current todo as the data
    // payload by stringifying the object first
    el.addEventListener('dragstart', (e) => {
      console.log('Start');
      
      el.classList.add('drag-src')
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', JSON.stringify(this.data));
    });
    
    // Remove the drag-src class
    el.addEventListener('dragend', (e) => {
      e.preventDefault();
      el.classList.remove('drag-src')
    });
  }
}
