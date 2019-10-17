interface IUser {
    id: string;
    name: string;
}
export default class User implements IUser {
    id: string;
    name: string;
    constructor(user: IUser);
}
export {};
