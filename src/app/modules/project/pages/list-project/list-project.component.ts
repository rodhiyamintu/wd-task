import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
    selector: 'app-list-project',
    templateUrl: './list-project.component.html',
    styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {

    currentUser: any = null;
    blocked: boolean = false;
    loading: boolean = true;
    users: any;
    projects: any;

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private projectService: ProjectService
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
        this.projectService.allProject(this.currentUser.uid).then(data => {
            data.subscribe((d: any) => {
                console.log(d);
                this.projects = d;
                this.loading = false;
            })
        })
    }

    userInfo(id: any) {
        const userDInfo: any = this.authService.getUserInfo(id);
        // console.log(userDInfo)
        return userDInfo[0] ? userDInfo[0].displayName : '';
    }
}
