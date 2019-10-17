export default class Authentication {
    domain: string;
    constructor(clientOptions: any);
    init: (clientOptions: any) => void;
    getToken: () => Promise<any>;
    getUser: () => Promise<any>;
    isAuthenticated: () => Promise<boolean>;
    loginWithRedirect: (options: any) => void;
    logout: (options: any) => Promise<void>;
}
