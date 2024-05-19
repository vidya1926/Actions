import axios, { AxiosResponse } from 'axios';
import { test, expect } from '@playwright/test';
import { RandomData } from '../utils/TestData/randomData';

const data = new RandomData();
const user = data.first_name;
const last_name=data.last_name;
const mobile_number=data.mobile_number;
const addr1=data.address;
const email=data.email;


const userData = {
    access: "1,2,9,34,45,70,78,101,114,115,116,119,121,123,128,129,131,132,133,134,135,136,140,141,143,144,146,147,149,150,157,160,170,178,180,181,187,190,191",
    first_name: user,
    last_name:last_name,
    full_name: user+' '+last_name,
    username: user,
    password: "Welcome1@",
    email: email,
    status: "Active",
    addr1: addr1,
    addr2: "test2",
    city: "Chennai",
    state: "IN-TN",
    country: "IN",
    state_name: "Tamil Nadu",
    country_name: "India",
    zip: "600031",
    time_zone: "tmz_0303",
    phone_no: mobile_number,
    mobile_no: mobile_number,
    preferred_language: "English",
    preferred_currency: "Indian Rupee"
};
let userId: any;
export async function createUser() {
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
        formData.append(key, value);
    });

    try {
        const response: AxiosResponse<any> = await axios.post("https://learn.e1cloudqa.com/ajax/admin/people/user/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Connection": "keep-alive"
            }
        });
        const responseData = response.data;
        userId = responseData.user_id;
        return { id: userId };
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

export async function getUserRecord() {
    try {
        const id = await createUser();
        const UserResponse = await axios.post(`https://learn.e1cloudqa.com/ajax/admin/people/user/fetch_to_edit`, id, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Connection": "keep-alive"
            }
        });

        const res = UserResponse.data;
        const status = UserResponse.status;
        expect(status).toEqual(200);
        const username = res.data.user_data.Username;
        return username;
    } catch (error) {
        console.error("Error getting user record:", error);
    }
}

// test(`Create and Get User Record`, async ({ }) => {
//    console.log( await getUserRecord());
// });
