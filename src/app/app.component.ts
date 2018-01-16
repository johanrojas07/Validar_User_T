import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  my_notes: Observable<any[]>;

  constructor(public afDB: AngularFireDatabase) {
    this.getNotes().valueChanges().subscribe(notas => {
      this.my_notes = notas;

    });
  }
  getNotes(){
    return this.afDB.list('/notas');
  }
  removeNotes(){
    this.afDB.database.ref('notas/' + this.note.id).remove();
    this.showform = false;
    this.note = {id: null, title: null, description: null};
  }
  note = {id: null, title: null, description: null};
  showform = false;
  editing = false;
  
  addNote() {
    this.editing = true;
    this.showform = true;
    this.note = {id: null, title: null, description: null};
  }
  cancel() {
    this.showform = false;
  }
  createNote(){
    if(this.editing){     
    this.afDB.database.ref('notas/' + this.note.id).set(this.note);
    }else{
    this.note.id = Date.now();
    this.afDB.database.ref('notas/' + this.note.id).set(this.note);
    }
    this.showform = false;
    this.note = {id: null, title: null, description: null};
     /*if(this.editing){
      var me = this;
      this.my_notes.forEach((el, i) => {
        if(el.id == me.note.id){
          me.my_notes[i] = me.note;
        }
      });
      this.showform = false;
    }else{    
    this.my_notes.push(this.note);
    this.showform = false;
    this.note = {id: null, title: null, description: null};
    }*/
  }
  viewNote(note) {
    this.editing = true;
    this.note = note; 
    this.showform = true;
  }
  delete(){
    /*var me = this;
    this.my_notes.forEach((el, i) => {
      if(el == me.note){
        me.my_notes.splice(i, 1);
      }
    });
    this.showform = false;
    this.note = {id: null, title: null, description: null};*/
  }
}
