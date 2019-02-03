import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
	selector: 'app-user-data',
	templateUrl: './user-data.component.html',
	styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

	public user: User;
	public title = 'User Detail';

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private router: Router
	) { }

	ngOnInit() {
		this.route.params.subscribe(
			(p) => {
				this.userService.getUser(+p.id).subscribe(
					response => this.user = response['data']
				);
			}
		);
	}

	backToUsers() {
		this.router.navigate(['users']);
	}
}
