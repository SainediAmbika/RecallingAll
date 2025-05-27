import { showReviewsTotal, populateUser } from './utils';

const reviewTotal = document.querySelector(".reviews") as HTMLElement;
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement;
const userNameDisplay = document.querySelector('#user')  as HTMLElement;

const reviewsbyusers:{
    name: string;
    star: number;
    loyaltyuser: boolean;
    date: string;
}[] = [
    {
        name:'Bindu',
        star:5,
        loyaltyuser:true,
        date:'19-12-2024'
    },
    {
        name:'Koti',
        star:5,
        loyaltyuser:false,
        date:'24-12-2024'
    },
    {
        name:'Durga',
        star:5,
        loyaltyuser:true,
        date:'03-15-2020'
    },
    {
        name:'Venky',
        star:5,
        loyaltyuser:false,
        date:'19-09-2000'
    },
]


// const info: {
// image: string;
// title: string;
// couch_surf_price_per_night: number;
// first_line_of_address: string | number;
// town_or_city: string;
// postcode_or_zipcode: number;
// country: string;
// contact_details:number;
// available_to_rent:boolean;
// }[]=[
//     {
// image: string;
// title: string;
// couch_surf_price_per_night: number;
// first_line_of_address: string | number;
// town_or_city: string;
// postcode_or_zipcode: number;
// country: string;
// contact_details:number;
// available_to_rent:boolean;
// }
// ]



showReviewsTotal(reviewsbyusers.length,reviewsbyusers[0].name,reviewsbyusers[0].loyaltyuser);


// const you: {
//     userName: string;
//     isReturning: boolean;
// } = {
//     userName: 'Bobby',
//     isReturning: true,
// }

const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: (string | number) [];
} = {
    firstName: 'Bobby',
    lastName: 'John',
    isReturning: true,
    age :32,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow',23]
}



