import { Component } from '@angular/core';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {

  dog1 = {name:"dog1", color:"blue"};
  dog2 = {name:"dog2", color:"red"};
  dog3 = {name:"dog3", color:"green"};

  doBark(name:string){
    console.log(`${name} has barked.`);
  }

  changeDog1(name){
    this.dog1.name = name;
  }
}
