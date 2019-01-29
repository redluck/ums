import { UserInterface } from './../interfaces/user';
import { Injectable } from "@angular/core";
import { User } from "../classes/user";

@Injectable()
export class UserService {

	users: User[] = [
		{
			id: 1,
			name: 'Hidran1',
			lastname: 'Arias1',
			email: 'hidran@gmail.com',
			fiscalcode: 'RSAHRN72M22Z444S',
			province: 'Torino',
			phone: '454545455',
			age: 43
		},
		{
			id: 2,
			name: 'Hidran2',
			lastname: 'Arias2',
			email: 'hidran@gmail.com',
			fiscalcode: 'RSAHRN72M22Z444S',
			province: 'Torino',
			phone: '454545455',
			age: 43
		},
		{
			id: 3,
			name: 'Hidran3',
			lastname: 'Arias3',
			email: 'hidran@gmail.com',
			fiscalcode: 'RSAHRN72M22Z444S',
			province: 'Torino',
			phone: '454545455',
			age: 43
		},
		{
			id: 4,
			name: 'Hidran4',
			lastname: 'Arias4',
			email: 'hidran@gmail.com',
			fiscalcode: 'RSAHRN72M22Z444S',
			province: 'Torino',
			phone: '454545455',
			age: 43
		}
	];

	constructor() { }

	getUsers() {
		return this.users;
	}

	getUser(id: number): User {
		return this.users.find(user => user.id === id);
	}

	deleteUser(user) {
		let index = this.users.indexOf(user);
		if (index >= 0) {
			this.users.splice(index, 1);
		}
	}

	updateUser(user: UserInterface) {
		const idx = this.users.findIndex((v) => v.id === user.id);
		alert(idx);
		if(idx !== -1) {
			this.users[idx] = user;
		}
	}

	createUser(user: UserInterface) {
		user.id = this.users.length + 1;
		this.users.splice(0, 0, user);
	}
}