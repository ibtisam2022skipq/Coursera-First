import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  @Input('user') user: User = new User();
  @Output() userDelete: EventEmitter<User> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(deleteUser: User){
    this.userDelete.emit(deleteUser);
  }

}
