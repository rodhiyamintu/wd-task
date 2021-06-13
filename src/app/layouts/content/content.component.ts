import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';

declare let $: any;

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    items!: MenuItem[];
    currentUser: any = null;
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {

        this.currentUser = this.authService.currentUser.value;
        console.log(this.currentUser)

        this.items = [
            {
                label: 'File',
                items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { label: 'Quit' }
                ]
            },
            {

                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Settings', icon: 'pi pi-fw pi-refresh' },
                    { label: 'Inbox', icon: 'pi pi-fw pi-refresh' },
                    { label: 'Logout', icon: 'pi pi-fw pi-trash' },
                ]
            }
        ];
    }

    onLogout() {
        this.authService.logout();
    }

}
