import { Component } from '@angular/core';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {

  dog1 = {name:"dog1", color:"blue"};

  doBark(name:string){
    console.log(`${name} has barked.`);
  }

  changeDog1(name){
    this.dog1.name = name;
  }
}
