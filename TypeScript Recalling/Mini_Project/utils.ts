"use strict";
const reviewTotal = document.querySelector(".reviews") as HTMLElement;
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement;
const userNameDisplay = document.querySelector('#user')  as HTMLElement;




export function showReviewsTotal(value: number, reviewer: string, isloyalty: boolean) {
    const iconDisplay = isloyalty?'⭐️':'';
    reviewTotal.innerHTML = value.toString()+ ' | last reviewed by ' + reviewer + iconDisplay;
}



export function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

