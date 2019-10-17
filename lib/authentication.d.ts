export default class Authentication {
    domain: string;
    constructor(clientOptions: any);
    init: (clientOptions: any) => void;
    getToken: () => Promise<any>;
    getUser: () => Promise<any>;
    isAuthenticated: () => Promise<boolean>;
    loginWithRedirect: ({ redirectUri }: {
        redirectUri: any;
    }) => void;
    logout: ({ returnTo }: {
        returnTo: any;
    }) => Promise<void>;
}
