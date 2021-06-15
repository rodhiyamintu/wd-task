import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { InboxService } from 'src/app/core/services/inbox.service';
import { Inbox } from 'src/app/core/interfaces/inbox';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    providers: [MessageService]
})
export class ViewComponent implements OnInit {

    currentUser: any = null;
    blocked: boolean = true;
    loading: boolean = true;
    users: any;
    projects: any;
    inboxMessages: any;
    inboxData!: Inbox;

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private projectService: ProjectService,
        private inboxService: InboxService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.currentUser = this.authService.currentUser.value;

        this.inboxData = {
            subject: '',
            message: '',
            oid: '',
            to: '',
            sendById: '',
            sendByName: '',
            createdAt: ''
        }

        this.route.params.subscribe(param => {
            console.log(param.id)

            this.inboxService.viewMessage(param.id).then((data) => {
                data.subscribe((result: any) => {
                    console.log(result)
                    this.inboxData = result;
                    this.blocked = false;
                })
            }).catch(error => {
                console.log(error)
            })
        })

        // all users
        this.userService.getAllUsers(this.currentUser.uid).then(data => {
            data.subscribe(d => {
                // console.log(d)
                this.users = d;
                this.loading = false;
            })
        })

        // all projects
        this.inboxService.allMessages(this.currentUser.uid).then(data => {
            data.subscribe((d: any) => {
                // console.log(d);
                this.inboxMessages = d;
                // this.loading = false;
            })
        })
    }

    onRowSelect(event: any) {
        console.log(event)
    }
}
