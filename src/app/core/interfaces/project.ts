export interface Project {
    docId?: string;
    title: string;
    progress: string,
    description: string;
    assignedId: string;
    createdById: string,
    createdByName: string,
    updatedAt?: Date;
    createdAt?: Date;
}
