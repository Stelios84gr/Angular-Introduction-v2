export interface User {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    address: {
        area: string,
        road: string
    };
};

export interface LoggedinUser {
    username: string,
    email: string,
    roles: [string]
};