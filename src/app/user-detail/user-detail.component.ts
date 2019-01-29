import { UserService } from './../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	private userCopy: User;
	private __user: User;

	@Input() set user(user: User) {
		//Entrando nel form creo un riferimento modificabile all'oggetto contenuto nei campi (il parametro)
		this.__user = user;
		//Ma mi creo anche una copia dell'oggetto non modificabile
		this.userCopy = Object.assign({}, user);
	}

	get user() {
		return this.__user;
	}

	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.user = new User();
		this.route.params.subscribe(
			(params) => {
				if (!params.id) {
					return;
				}
				this.user = this.userService.getUser(+params.id);
			}
		);
	}

	saveUser() {
		if (this.user.id > 0) {
			this.userService.updateUser(this.user);
		} else {
			this.userService.createUser(this.user);
		}
		this.router.navigate(['users']);
	}

	resetForm(form) {
		if (this.user.id === 0) {
			this.user = new User();
		} else {
			//Se non è un nuovo utente reimposto i dati dell'oggetto originale
			this.user = this.userCopy;
		}
	}

	backToUsers() {
		this.router.navigate(['users']);
	}
}
