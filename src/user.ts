interface IUser {
    id: string
    name: string
}

export default class User implements IUser {
    id: string
    name: string

    constructor(user: IUser) {
        this.id = user.id
        this.name = user.name
    }
}
