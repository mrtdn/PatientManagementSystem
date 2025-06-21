import type { UserRole } from "./userRole";

export interface User {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}