import { TypeUser } from "@prisma/client";

export class User {
    id: number;
    name?: string;
    phone?: string;
    typeUser?: TypeUser;
}
