import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskArray: string[] = [
    'Task 1',
    'Task 2',
    'Task 3',
    'Task 4',
    'Task 5',
    'Task 6',
    'Task 7',
    'Task 8',
    'Task 9',
    'Task 10',
    'Task 11',
    'Task 12',
    'Task 13',
    'Task 14',
    'Task 15',
    'Task 16',
    'Task 17',
    'Task 18',
    'Task 19',
    'Task 20',
    'Task 21',
    'Task 22',
    'Task 23',
    'Task 24',
    'Task 25',
    'Task 26',
    'Task 27',
    'Task 28',
    'Task 29',
    'Task 30',
    'Task 31',
  ];
  task: string = ''; // taskName
  gotIndex: number; // index
  edit: boolean = false; // edit or delete
  editedTask: string;

  addTask() {
    if (this.task !== '') {
      this.taskArray.push(this.task);
      this.task = '';
    } else {
      alert('Please enter a task!!');
    }
  }

  getIndex(index: number) {
    this.gotIndex = index;
  }

  checkInstruct(instruct: string) {
    if (instruct !== 'edit') {
      this.deleteElement(this.gotIndex);
    }
  }

  deleteElement(index: number) {
    console.log('deleted item index: ' + index);
    this.taskArray.splice(index, 1);
    this.edit = false;
  }
}
