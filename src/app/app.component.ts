import { Component, TemplateRef, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('addStopModel', { static: true }) addStopModel: TemplateRef<any>;
  @ViewChild('addTaskModel', { static: true }) addTaskModel: TemplateRef<any>;
  // {
  //   userName:'Arpit',
  //   tasks:['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']
  // },
  // {
  //   userName:'Vikas',
  //   tasks:['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']
  // }
  users = [];
  connectedTo = [];
  canEdit = false;
  constructor(private modalService: NgbModal) {
    this.users = [
      {
        name: 'User1',
        tasks: ['Get to work', 'Pick up groceries'],
        canEdit:false,
      }, {
        name: 'User2',
        tasks: ['Go home', 'Fall asleep'],
        canEdit:false
      }, {
        name: 'User3',
        tasks: ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'],
        canEdit:false
      }
    ];
    for (let a of this.users) {
      this.connectedTo.push(a.name);
    };
  }
  title = 'trello';
  userName;
  taskName;
  index;
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  openModel(type) {
    if(type == 'user'){
      this.modalService.open(this.addStopModel, { size: 'sm', centered: true });
    }
    else{
      this.modalService.open(this.addTaskModel, { size: 'sm', centered: true });
    }
  }
  closeModal() {
    this.modalService.dismissAll();
  }
  addUser(){
    var params = {
      name: this.userName,
      tasks:[]
    }
    this.users.push(params);
    console.log(this.users);
    this.closeModal();
  }
  selectedUser;
  deleteUser(){
    this.users.splice(this.users.findIndex(a => a.name === this.selectedUser.name) , 1)
  }
  addTask(){
    this.users[this.index].tasks.push(this.taskName);
    this.closeModal();
    this.taskName = '';
  }
  
}
