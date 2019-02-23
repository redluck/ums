import { AuthService } from './../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    @Output() onNewUser = new EventEmitter();
    private isUserLoggedIn = false;

	constructor(private auth: AuthService, private router: Router) { }

	ngOnInit() {
        this.isUserLoggedIn = this.auth.isUserLoggedIn();
	}

	newUser() {
		this.onNewUser.emit();
    }
    
    logout(e) {
        e.preventDefault();
        this.auth.logout();
        this.router.navigate(['login']);
    }
}
