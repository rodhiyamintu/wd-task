export interface Inbox {
    docId?: string;
    to: string;
    sendById: string;
    sendByName: string;
    message: string;
    subject: string;
    oid: string;
    createdAt?: Date;
    updatedAt?: Date;
}
