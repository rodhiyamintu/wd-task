import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/core/interfaces/project';
import { Inbox } from 'src/app/core/interfaces/inbox';
import { InboxService } from 'src/app/core/services/inbox.service';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    providers: [MessageService]
})
export class AddComponent implements OnInit {

    blocked: boolean = true;
    currentUser: any = null;

    text!: string;
    results!: string[];

    users: any = []
    selectedUser: any = [];
    // se!: User;

    progress: any = [];
    selectedProgress: any;

    inbox!: Inbox;

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private router: Router,
        private projectService: ProjectService,
        private inboxService: InboxService,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.currentUser = this.authService.currentUser.value;

        this.inbox = {
            to: '',
            message: '',
            subject: '',
            oid: this.currentUser.oid,
            sendById: this.currentUser.uid,
            sendByName: this.currentUser.displayName
        }

        // get all users
        this.userService.getAllUsers(this.currentUser.oid).then(data => {
            data.subscribe(d => {
                this.users = d;
                this.blocked = false;
            })
        })

        // set data progress
        for (let index = 1; index <= 10; index++) {
            this.progress.push({ name: `${index * 10}%`, code: `${index * 10}` });
        }
    }

    // add user
    onSubmit(d: any) {

        console.log(d);

        if (d.valid) {
            this.blocked = true;

            let inboxData = {
                to: this.selectedUser,
                message: d.value.message,
                subject: d.value.subject,
                oid: this.currentUser.oid,
                sendById: this.currentUser.uid,
                sendByName: this.currentUser.displayName,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            this.inboxService.sendMessage(inboxData).then((response) => {
                this.messageService.add({ severity: 'success', summary: 'Message send successfully.', closable: false });
                // this.userForm.reset();
                this.router.navigate(['/message']);
                this.blocked = false;
                console.log();
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
