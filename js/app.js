'use strict';

//global variables listed up top
let parentEL = document.getElementById('stands');
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 
const totalArray = [];
//global variables end


// cookstand constructor
// location, min/max cookies, avg cookies, total cookies

// assisted by TA Audrey Patterson
let allStands = [];
function EachStand(city, minCust, maxCust, avgcookies){
    this.city = city;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgcookies = avgcookies;
    this.sold = [];
    this.totalcookies = 0;
    allStands.push(this);
}

EachStand.prototype.avgCust = function() {
    return Math.floor(Math.random()*((this.maxCust-this.minCust)+1) + this.minCust * this.avgcookies);

    
};

EachStand.prototype.cookieSold = function(){
        for (let i = 0; i < hours.length; i++){
            let avgpurchase = Math.floor(this.avgCust());
            this.sold.push(avgpurchase);
            this.totalcookies = this.totalcookies + avgpurchase
            };
            totalArray.push(this.sold);
}



EachStand.prototype.listSales = function(){

       
    let tableEl = document.createElement('tr');
        this.cookieSold()

        let titleWord = document.createElement('td')
        titleWord.textContent = this.city
        tableEl.appendChild(titleWord);
        for (let i = 0; i < this.sold.length; i++) {
//console.log(this.sold[i])
        let salesEL = document.createElement('td');
        salesEL.textContent = this.sold[i];
        tableEl.appendChild(salesEL);

    }
        let sumtotal = document.createElement('td')
        sumtotal.textContent = 'Total number of cookies sold today ' + this.totalcookies
        tableEl.appendChild(sumtotal)
    parentEL.appendChild(tableEl)

}

// let totalEl = document.createElement('tfoot')
//     // outer loop
//        for (let i = 0; i < 14; i++){
//            console.log(totalArray[i])
//            //inner loop
//            for (let j = 0; j > 5; j++){
//             //console.log(j)
//             console.log(totalArray[i][j])
//            }
//         }

// global variables

new EachStand('Seattle', 23, 65, 6.3)
new EachStand('Tokyo', 3, 24, 1.2)
new EachStand('Dubai', 11, 38, 3.7)
new EachStand('Paris', 20, 38, 2.3)
new EachStand('Lima', 2, 16, 4.6)
//console.log(allStands)

let totalEl = document.createElement('tfoot')
    // outer loop
       for (let i = 0; i < 14; i++){
           console.log(totalArray[i])
           //inner loop
           for (let j = 0; j > 5; j++){
            //console.log(j)
            console.log(totalArray[i][j])
           }
        }


function renderStands(){
    for(let i = 0; i < allStands.length; i++){
        allStands[i].listSales();
    }
}
renderStands()
//console.log(totalArray.length)
//global variables end


// need to define shared properties/variables for each allStores. 
// common shared info - location, random cookies, avg cookies. 








// let tokyoStand = {
//     city: 'Tokyo',
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
//     minCust: 3,
//     maxCust: 24,
//     avgCust: function(){
//         return Math.floor(Math.random()*((this.maxCust-this.minCust)+1) + this.minCust)    
//     },
//     avgcookies: 1.2,
//     totalcookies: 0,
//     salestotal: [],
//     cookiesSold: function(){
//         for (let i = 0; i < this.hours.length; i++){
//             let avgpurchase = Math.floor(this.avgCust() * this.avgcookies)
//             this.salestotal.push(this.hours[i] + " " + avgpurchase)
//             this.totalcookies = this.totalcookies + avgpurchase
//             }
//         },
//     listSales: function () {
//         let tableEl = document.createElement('ul');
//         this.cookiesSold()
//             let titleWord = document.createElement('li')
//             titleWord.textContent = this.city
//             tableEl.appendChild(titleWord);
//             for (let i = 0; i < this.salestotal.length; i++) {
//     console.log(this.salestotal[i])
//             let salesEL = document.createElement('li');
//             salesEL.textContent = this.salestotal[i];
//             tableEl.appendChild(salesEL);
    
//         }
//             let sumtotal = document.createElement('li')
//             sumtotal.textContent = 'Total number of cookies sold today ' + this.totalcookies
//             tableEl.appendChild(sumtotal)
//         parentEL.appendChild(tableEl)
//     }
//     }
//     tokyoStand.listSales()

// let DubaiStand = {
//         city: 'Dubai',
//         hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
//         minCust: 11,
//         maxCust: 38,
//         avgCust: function(){
//             return Math.floor(Math.random()*((this.maxCust-this.minCust)+1) + this.minCust)    
//         },
//         avgcookies: 3.7,
//         totalcookies: 0,
//         salestotal: [],
//         cookiesSold: function(){
//             for (let i = 0; i < this.hours.length; i++){
//                 let avgpurchase = Math.floor(this.avgCust() * this.avgcookies)
//                 this.salestotal.push(this.hours[i] + " " + avgpurchase)
//                 this.totalcookies = this.totalcookies + avgpurchase
//                 }
//             },
//         listSales: function () {
//             let tableEl = document.createElement('ul');
//             this.cookiesSold()
//                 let titleWord = document.createElement('li')
//                 titleWord.textContent = this.city
//                 tableEl.appendChild(titleWord);
//                 for (let i = 0; i < this.salestotal.length; i++) {
//         console.log(this.salestotal[i])
//                 let salesEL = document.createElement('li');
//                 salesEL.textContent = this.salestotal[i];
//                 tableEl.appendChild(salesEL);
        
//             }
//                 let sumtotal = document.createElement('li')
//                 sumtotal.textContent = 'Total number of cookies sold today ' + this.totalcookies
//                 tableEl.appendChild(sumtotal)
//             parentEL.appendChild(tableEl)
//         }
//         }
//         DubaiStand.listSales()

//     let ParisStand = {
//             city: 'Paris',
//             hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
//             minCust: 20,
//             maxCust: 38,
//             avgCust: function(){
//                 return Math.floor(Math.random()*((this.maxCust-this.minCust)+1) + this.minCust)    
//             },
//             avgcookies: 2.3,
//             totalcookies: 0,
//             salestotal: [],
//             cookiesSold: function(){
//                 for (let i = 0; i < this.hours.length; i++){
//                     let avgpurchase = Math.floor(this.avgCust() * this.avgcookies)
//                     this.salestotal.push(this.hours[i] + " " + avgpurchase)
//                     this.totalcookies = this.totalcookies + avgpurchase
//                     }
//                 },
//             listSales: function () {
//                 let tableEl = document.createElement('ul');
//                 this.cookiesSold()
//                     let titleWord = document.createElement('li')
//                     titleWord.textContent = this.city
//                     tableEl.appendChild(titleWord);
//                     for (let i = 0; i < this.salestotal.length; i++) {
//             console.log(this.salestotal[i])
//                     let salesEL = document.createElement('li');
//                     salesEL.textContent = this.salestotal[i];
//                     tableEl.appendChild(salesEL);
            
//                 }
//                     let sumtotal = document.createElement('li')
//                     sumtotal.textContent = 'Total number of cookies sold today ' + this.totalcookies
//                     tableEl.appendChild(sumtotal)
//                 parentEL.appendChild(tableEl)
//             }
//             }
//             ParisStand.listSales()

//             let LimaStand = {
//                 city: 'Lima',
//                 hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
//                 minCust: 2,
//                 maxCust: 16,
//                 avgCust: function(){
//                     return Math.floor(Math.random()*((this.maxCust-this.minCust)+1) + this.minCust)    
//                 },
//                 avgcookies: 4.6,
//                 totalcookies: 0,
//                 salestotal: [],
//                 cookiesSold: function(){
//                     for (let i = 0; i < this.hours.length; i++){
//                         let avgpurchase = Math.floor(this.avgCust() * this.avgcookies)
//                         this.salestotal.push(this.hours[i] + " " + avgpurchase)
//                         this.totalcookies = this.totalcookies + avgpurchase
//                         }
//                     },
//                 listSales: function () {
//                     let tableEl = document.createElement('ul');
//                     this.cookiesSold()
//                         let titleWord = document.createElement('li')
//                         titleWord.textContent = this.city
//                         tableEl.appendChild(titleWord);
//                         for (let i = 0; i < this.salestotal.length; i++) {
//                 console.log(this.salestotal[i])
//                         let salesEL = document.createElement('li');
//                         salesEL.textContent = this.salestotal[i];
//                         tableEl.appendChild(salesEL);
                
//                     }
//                         let sumtotal = document.createElement('li')
//                         sumtotal.textContent = 'Total number of cookies sold today ' + this.totalcookies
//                         tableEl.appendChild(sumtotal)
//                     parentEL.appendChild(tableEl)
//                 }
//                 }
//                 LimaStand.listSales()