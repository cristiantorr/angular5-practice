import { Component, Input, Output, EventEmitter } from '@angular/core';
/* imprimimos name y color*/
@Component ({
   selector: "dog-details",
   template: `
      <h2>{{name}} - {{color}}</h2>
      <input (input)="handleNameChange($event)" type="text" />
      <button class="btn btn-waves" (click) = "handleClick()">event button</button>
   `
})
/* Input agregamos en la importación */
export class DogDetailsComponent{
  // name = "Cristian";
  @Input() name:string; /*harry y joder imprimen */
  @Input() color:string; /*harry y joder imprimen */

  @Output() bark = new EventEmitter<{}>();
  @Output() nameChange = new EventEmitter<string>();

  handleClick(){
    this.bark.emit({});
  }

  handleNameChange(e){
     //console.log(e.target.value);
     this.nameChange.emit(e.target.value)

  }
}
