import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  my_notes= [
    {id: 1, title: 'Note 1', description: 'description for note 1'},
    {id: 2, title: 'Note 2', description: 'description for note 1'},
    {id: 3, title: 'Note 3', description: 'description for note 1'},
    {id: 4, title: 'Note 4', description: 'description for note 1'}
  ];
  note={title:null, body:null};

  showform:boolean = false;
  addNote() {
    this.showform = true;
  }
  cancel() {
    this.showform = false;
  }
  
}
