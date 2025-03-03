import {Component, Input, Output,EventEmitter} from '@angular/core';
import {Task} from './task.model';
import {CardComponent} from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  imports: [
    CardComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!:Task;
  @Output() complete = new EventEmitter();
  //發送已完成訊息
  onComplete() {
    this.complete.emit(this.task.id);
  }
}
