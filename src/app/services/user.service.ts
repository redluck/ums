import { UserInterface } from './../interfaces/user';
import { Injectable } from "@angular/core";
import { User } from "../classes/user";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

	users: User[] = /*[
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
	];*/ [];
	private APIURL = 'http://localhost:8000/users';

	constructor(private http: HttpClient) { }

	getUsers() {
		return this.http.get(this.APIURL);
	}

	getUser(id: number) {
		return this.http.get(this.APIURL + '/' + id);
	}

	deleteUser(user) {
		const data = { _method: 'DELETE' }
		return this.http.post(this.APIURL + '/' + user.id, data);
	}

	updateUser(user: UserInterface) {
		user['_method'] = 'PUT';
		return this.http.post(this.APIURL + '/' + user.id, user);
	}

	createUser(user: UserInterface) {
		return this.http.post(this.APIURL, user);
	}
}