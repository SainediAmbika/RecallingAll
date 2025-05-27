"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showReviewsTotal = showReviewsTotal;
exports.populateUser = populateUser;
const reviewTotal = document.querySelector(".reviews");
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
function showReviewsTotal(value, reviewer, isloyalty) {
    const iconDisplay = isloyalty ? '⭐️' : '';
    reviewTotal.innerHTML = value.toString() + ' | last reviewed by ' + reviewer + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
