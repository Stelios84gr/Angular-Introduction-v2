export interface Address {
    area: string,
    road: string
};

export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    // address: Address;
    address: string;
};
