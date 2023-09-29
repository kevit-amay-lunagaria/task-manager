import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() taskList: string[] = [];
  @Input() taskName: string = '';
  @Input() editing: boolean;
  @Input() taskIndex: number;
  @Output() sendID = new EventEmitter<number>();
  @Output() sendInstruct = new EventEmitter<string>();
  showButton: boolean = false;
  mouseIndex: number = 0;

  ngOnInit(): void {}

  getID(index: number, instruct: string, mIndex: number) {
    if (this.taskIndex === index || !this.editing) {
      if (instruct === 'edit') this.editing = !this.editing;
    }

    if (instruct === 'edit') this.showButton = !this.showButton;

    console.log(mIndex);
    //console.log('tindex' + this.taskIndex);
    this.sendID.emit(index);
    this.sendInstruct.emit(instruct);
    document.getElementById('edit').classList.toggle('display-none');
    document.getElementById('delete').classList.toggle('display-none');
  }

  //Important
  trackByFn(taskIndex: number) {
    return taskIndex;
  }
}

/*
trackByFn - By default, no need to use trackBy in Angular. 
But with large collections of data, angular ngFor directive may perform poorly. 
For example, a small change of data such as adding a new record, editing, or deleting a record from the collection. 
The angular framework will remove all the DOM elements that are associated with the data and will create them again in the DOM tree even if the same data is coming. 
Here, a lot of DOM manipulation will happen in the background if a large amount of data comes from the API then the application performance will suffer. 
*/
