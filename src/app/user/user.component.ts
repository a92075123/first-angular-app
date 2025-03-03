import {Component, computed, signal , Input , input, Output,output,EventEmitter} from '@angular/core';
import {User} from './user.model';
import {CardComponent} from '../shared/card/card.component';
// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [
    CardComponent
  ],
  styleUrl: './user.component.css'
})
/**
 * export = public 共用的 可以讓別的Angular物件使用
 * export class 導出一個類別 可以供屬性跟方法使用
 * signal = 會監控帶入參數的值是否有變化，有的話會立即改變當下UI狀態，可以直接改變signal的值
 * computed = 用來計算設定好的signal值，不能直接改變computed的值
export class UserComponent {
    //selectedUser = 使用signal監控DUMMY_USERS[randomIndex]值
    selectedUser = signal(DUMMY_USERS[randomIndex]);
    //當signal被改變利用computed計算imagePath
    imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
    onSelectUser(){
      const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
      //改變signal的值
      this.selectedUser.set(DUMMY_USERS[randomIndex]);
    }
}
 */
export class UserComponent {
  /**
    第一種Input方法
   */
  // @Input({required: true}) id!:String;
  // @Input({required: true}) avatar!:String;
  // @Input({required: true}) name!:String;
  @Input({required: true}) user!:User;
  @Input({required: true}) selected!:boolean;
  @Output() select = new EventEmitter();
  /**
   * 第二種input方法
   * 用signal類型作 input
   * <規定的型態>
    avatar = input.required<string>();
    name = input.required<string>();
   */
    get imagePath(){
      return 'assets/users/' + this.user.avatar
    }
    onSelectUser(){
       this.select.emit(this.user.id);
    }
}
