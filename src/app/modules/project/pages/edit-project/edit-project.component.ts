import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/core/interfaces/project';

@Component({
    selector: 'app-edit-project',
    templateUrl: './edit-project.component.html',
    styleUrls: ['./edit-project.component.scss'],
    providers: [MessageService]
})
export class EditProjectComponent implements OnInit {

    blocked: boolean = true;
    currentUser: any = null;

    users: any = []
    selectedUser: any = [];

    progress: any = [];
    selectedProgress: any;

    projectId = '';
    project!: Project;

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private projectService: ProjectService,
        private route: ActivatedRoute,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.currentUser = this.authService.currentUser.value;

        this.route.params.subscribe(param => {
            this.projectId = param.id;
            this.loadProject(param.id);
        })

        this.project = {
            title: '',
            description: '',
            assignedId: '',
            progress: '',
            createdById: this.currentUser.uid,
            createdByName: this.currentUser.displayName
        }

        // get all users
        this.getAllUsers();

        // progress
        for (let index = 1; index <= 10; index++) {
            this.progress.push({ name: `${index * 10}%`, code: `${index * 10}` });
        }
    }

    // add user
    onSubmit(d: any) {

        if (d.valid) {
            this.blocked = true;

            let projectValue = {
                title: d.value.title,
                assignedId: this.selectedUser,
                progress: d.value.progress,
                description: d.value.description,
                createdById: d.value.createdById,
                createdByName: d.value.createdByName,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            this.projectService.updateProject(this.projectId, projectValue).then((response) => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Project updated successfully.', closable: false });
                this.blocked = false;
            }).catch((error) => {
                console.log(error);
            })
        }
    }


    getAllUsers() {
        this.userService.getAllUsers(this.currentUser.oid).then(data => {
            data.subscribe(d => {
                this.users = d;
                this.blocked = false;
            })
        })
    }

    // on changing user
    onChangeUser(event: any) {
        // this.project.displayName = event.target.innerText;
    }

    loadProject(id: any) {
        this.projectService.getProject(id).then((data) => {
            data.subscribe((d: any) => {

                this.project = {
                    title: d.title,
                    description: d.description,
                    assignedId: d.assignedId,
                    progress: d.progress,
                    createdById: this.currentUser.uid,
                    createdByName: this.currentUser.displayName
                }

                this.selectedProgress = d.progress;
                this.selectedUser = d.assignedId;
            })
        })
    }
}
