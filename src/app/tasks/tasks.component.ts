import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {NewTaskComponent} from './new-task/new-task.component';
import {NewTaskData} from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!:string;
  @Input({required: true}) name!:string;
  //isAddingTask:判斷是否正在新增中
  isAddingTask = false;
  tasks =[
    {
      id:'t1',
      userId:'u1',
      title:'Master Angular',
      summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.',
      dueDate:'2025-12-31',
    },
    {
      id:'t2',
      userId:'u2',
      title:'Master Angular2',
      summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod2.',
      dueDate:'2025-06-31',
    },
    {
      id:'t3',
      userId:'u3',
      title:'Master Angular3',
      summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod3.',
      dueDate:'2025-01-31',
    },

  ]
  //抓取按下的user是誰
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  //完成後刪除當下案件
  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCancelAddTask() {
    this.isAddingTask=false
  }
  //新增任務
  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.enteredTitle,
      summary:  taskData.enteredSummary,
      dueDate:  taskData.enteredDate
    });
    this.isAddingTask = false;
  }

}
