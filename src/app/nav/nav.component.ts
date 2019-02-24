import { AuthService } from './../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    @Output() onNewUser = new EventEmitter();
    private isUserLoggedIn = false;
    private username: string;

    constructor(private auth: AuthService, private router: Router) {
        auth.usersignedin.subscribe(
            (user: User) => {
                this.username = user.name;
                this.isUserLoggedIn = true;
            }
        );
        auth.userlogout.subscribe(
            () => {
                this.username = '';
                this.isUserLoggedIn = false;
            }
        );
        auth.usersignedup.subscribe(
            (user: User) => {
                this.username = user.name;
                this.isUserLoggedIn = true;
            }
        );
    }

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

    signIn(e) {
        e.preventDefault();
        this.router.navigate(['login']);
    }

    signUp(e) {
        e.preventDefault();
        this.router.navigate(['signup']);
    }
}
