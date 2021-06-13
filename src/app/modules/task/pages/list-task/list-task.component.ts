import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { ProjectService } from 'src/app/core/services/project.service';

import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
    selector: 'app-list-task',
    templateUrl: './list-task.component.html',
    styleUrls: ['./list-task.component.scss'],
    providers: [MessageService]
})
export class ListTaskComponent implements OnInit {

    currentUser: any = null;
    blocked: boolean = false;
    loading: boolean = true;
    users: any;
    tasks: any;
    pid = '';

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute,
        private messageService: MessageService,
        private projectService: ProjectService,
        private taskService: TaskService
    ) { }

    ngOnInit(): void {
        this.currentUser = this.authService.currentUser.value;
        this.getAllUsers();

        this.route.params.subscribe(param => {
            this.pid = param.pid;
        })

        // all tasks
        this.taskService.allTasks(this.pid).then(data => {
            data.subscribe((d: any) => {
                this.tasks = d;
                console.log(d)
                this.loading = false;

            })
        })
    }


    getAllUsers() {
        this.userService.getAllUsers(this.currentUser.uid).then(data => {
            data.subscribe(d => {
                console.log(d)
                this.users = d;
                this.loading = false;
            })
        })
    }
}
