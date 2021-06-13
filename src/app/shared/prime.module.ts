import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChipModule } from 'primeng/chip';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ButtonModule,
        MenubarModule,
        ContextMenuModule,
        AvatarModule,
        AvatarGroupModule,
        BlockUIModule,
        ProgressSpinnerModule,
        ToastModule,
        MessagesModule,
        MessageModule,
        TableModule,
        TagModule,
        DropdownModule,
        EditorModule,
        ProgressBarModule,
        ChipModule,
        TooltipModule,
        TreeTableModule,
        MultiSelectModule,
        AutoCompleteModule
    ],
    exports: [
        ButtonModule,
        MenubarModule,
        ContextMenuModule,
        AvatarModule,
        AvatarGroupModule,
        BlockUIModule,
        ProgressSpinnerModule,
        ToastModule,
        MessagesModule,
        MessageModule,
        TableModule,
        TagModule,
        DropdownModule,
        EditorModule,
        ProgressBarModule,
        ChipModule,
        TooltipModule,
        TreeTableModule,
        MultiSelectModule,
        AutoCompleteModule
    ]
})
export class PrimeModule { }
