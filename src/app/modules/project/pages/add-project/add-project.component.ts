import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from './../../../../core/interfaces/user';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/core/interfaces/project';

@Component({
    selector: 'app-add-project',
    templateUrl: './add-project.component.html',
    providers: [MessageService]
})
export class AddProjectComponent implements OnInit {

    blocked: boolean = true;
    currentUser: any = null;

    users: any = []
    selectedUser: any = [];
    // se!: User;

    progress: any = [];
    selectedProgress: any;

    project!: Project;

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private projectService: ProjectService,
        private router: Router,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.currentUser = this.authService.currentUser.value;

        this.project = {
            title: '',
            description: '',
            assignedId: '',
            progress: '',
            createdById: this.currentUser.uid,
            createdByName: this.currentUser.displayName
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

            let projectValue = {
                title: d.value.title,
                assignedId: this.selectedUser.join(','),
                progress: d.value.progress,
                description: d.value.description,
                createdById: d.value.createdById,
                createdByName: d.value.createdByName,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            this.projectService.addProject(projectValue).then((response) => {
                this.messageService.add({ severity: 'success', summary: 'Project added successfully.', closable: false });
                // this.userForm.reset();
                this.blocked = false;
                console.log();
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    // on changing user
    onChangeUser(event: any) {
        console.log(event)
        // this.project.displayName = event.target.innerText;
    }
}
