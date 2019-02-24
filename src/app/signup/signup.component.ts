import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() {
    }

    signUp(form: NgForm) {
        let result = this.auth.signUp(form.value.name, form.value.email, form.value.password);
        if(!result) {
            return;
        }
        this.router.navigate(['']);
    }
}
