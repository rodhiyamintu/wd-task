import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { InboxService } from 'src/app/core/services/inbox.service';
import { Inbox } from 'src/app/core/interfaces/inbox';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    currentUser: any = null;
    blocked: boolean = false;
    loading: boolean = true;
    users: any;
    projects: any;
    inboxMessages: any;

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private projectService: ProjectService,
        private inboxService: InboxService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.currentUser = this.authService.currentUser.value;

        // all users
        this.userService.getAllUsers(this.currentUser.uid).then(data => {
            data.subscribe(d => {
                console.log(d)
                this.users = d;
                this.loading = false;
            })
        })

        // all projects
        this.inboxService.allMessages(this.currentUser.uid).then(data => {
            data.subscribe((d: any) => {
                console.log(d);
                this.inboxMessages = d;
                // this.loading = false;
            })
        })
    }

    onRowSelect(event: any) {
        console.log(event)
        this.router.navigate(['/message', event.data.docId])
    }
}
