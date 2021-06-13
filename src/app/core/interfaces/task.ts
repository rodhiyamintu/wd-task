export interface Task {
    docId?: string;
    title: string;
    pid: string;
    description: string;
    progress: string,
    assignedId: string;
    assignedName: string;
    createdById: string,
    createdByName: string,
    updatedAt?: Date;
    createdAt?: Date;
}
