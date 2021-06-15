import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from './../../../../core/interfaces/user';
import { Task } from 'src/app/core/interfaces/task';
import { ProjectService } from 'src/app/core/services/project.service';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss'],
    providers: [MessageService]
})
export class AddTaskComponent implements OnInit {

    blocked: boolean = true;
    currentUser: any = null;
    pid = '';

    users: any = []
    selectedUser!: User;

    progress: any = [];
    selectedProgress: any;

    project = {
        title: '',
        description: '',
        progress: '',
        displayName: '',
        createdBy: '',
        createdByName: ''
    };

    task!: Task;


    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private userService: UserService,
        private projectService: ProjectService,
        private taskService: TaskService,
        private router: Router,
        private route: ActivatedRoute,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.currentUser = this.authService.currentUser.value;

        this.route.params.subscribe(param => {
            this.pid = param.pid;
        })

        this.task = {
            title: '',
            pid: this.pid,
            description: '',
            progress: '',
            assignedId: '',
            assignedName: '',
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
    onSubmit(form: any) {
        console.log(this.selectedUser)
        console.log(form.value)

        if (form.valid) {
            this.blocked = true;

            this.taskService.addTask(form.value).then((response) => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task added successfully.', closable: false });
                // this.userForm.reset();
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
        this.task.assignedName = event.target.innerText;
    }
}
