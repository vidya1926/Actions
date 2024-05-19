import {faker} from "@faker-js/faker";


export class RandomData {
    first_name: string;
    last_name: string;
    mobile_number: any;
    email: string;
    address: string;
    
    


    constructor() {
        this.first_name = faker.person.firstName();
        this.last_name = faker.person.lastName();
        this.mobile_number= generateIndianPhoneNumber()
        this.email = faker.internet.email();
        this.address = faker.location.streetAddress();
    }
}

function generateIndianPhoneNumber(): string {
    const firstDigit = Math.floor(Math.random() * 3) + 7;
    let phoneNumber = `${firstDigit}`;
    for (let i = 0; i < 9; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
}
