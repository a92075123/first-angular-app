import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskComponent} from '../task/task.component';
import {NewTaskData} from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule,TaskComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>;
  @Output() add = new EventEmitter<NewTaskData>;
  enteredTitle = '';
  enteredDate= '';
  enteredSummary= '';

  //按下cancel按鈕
  onCancel() {
    this.cancel.emit()
  }
  //按下Create按鈕
  onSubmit() {
      this.add.emit({
        enteredTitle: this.enteredTitle,
        enteredDate: this.enteredDate,
        enteredSummary: this.enteredSummary
      })
  }
}
