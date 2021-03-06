import { UserService } from '../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/user';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	title = 'Users';
	users: User[] = [];
	@Output() updateUser = new EventEmitter<User>();

	constructor(private service: UserService) { }

	ngOnInit() {
		this.service.getUsers().subscribe(
			response => this.users = response['data']
		);
	}

	onDeleteUser(user: User) {
		const deleteUser = confirm('Do you really want to delete user ' + user.name + ' ' + user.lastname + '?');
		if (deleteUser) {
			this.service.deleteUser(user).subscribe(
				response => {
					const idx = this.users.indexOf(user);
					this.users.splice(idx, 1);
					alert(response['message'])
				}
			);
		}
	}

	onSelectUser(user: User) {
		//Creiamo una copia di user da emettere come evento per evitare che modificandone
		//il riferimento originale nel form i valori cambino in tempo reale anche nella tabella
		const userCopy = Object.assign({}, user)
		this.updateUser.emit(userCopy);
	}
}
