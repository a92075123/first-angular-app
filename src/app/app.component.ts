import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/Header.component';
import { UserComponent } from './user/user.component';
import {NgFor, NgIf} from '@angular/common';
import {DUMMY_USERS} from './dummy-users';
import {TasksComponent} from './tasks/tasks.component';

/**
 * selector : index.html mapping選擇器 <app-root>
 * import : 加入額外angular物件到 app.component.ts 供使用
 * templateUrl : 要連結到的html
 * styleUrl : 要連結到的css
 */
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS
  lockUser?:string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.lockUser)!;
  }

  onSelectUser(id: string) {
    console.log('當前使用者的id是' + id);
    this.lockUser= id;
  }
}
