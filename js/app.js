'use strict';


let parentEL = document.getElementById('stands');

let seattleStand = {
    city: 'Seattle',
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    // added random numbers for return command
    minCust: 23,
    maxCust: 65,
    avgCust: function(){
        return Math.floor(Math.random()*((this.maxCust-this.minCust)+1) + this.minCust)    
    },
    avgcookies: 6.3,
    totalcookies: 0,
// added customer request for total
    salestotal: [],
    cookieSold: function (){
    for (let i = 0; i < this.hours.length; i++){
        let avgpurchase = Math.floor(this.avgCust() * this.avgcookies)
        this.salestotal.push(this.hours[i] + " " + avgpurchase)
        this.totalcookies = this.totalcookies + avgpurchase
        }
    },
listSales: function () {
    let newUl = document.createElement('ul');
    this.cookieSold()
        let titleWord = document.createElement('li')
        titleWord.textContent = this.city
        newUl.appendChild(titleWord);
        for (let i = 0; i < this.salestotal.length; i++) {
console.log(this.salestotal[i])
        let salesEL = document.createElement('li');
        salesEL.textContent = this.salestotal[i];
        newUl.appendChild(salesEL);

    }
        let sumtotal = document.createElement('li')
        sumtotal.textContent = 'Total number of cookies sold today ' + this.totalcookies
        newUl.appendChild(sumtotal)
    parentEL.appendChild(newUl)
}
}
seattleStand.listSales()

let tokyoStand = {
    city: 'Tokyo',
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    minCust: 3,
    maxCust: 24,
    avgCust: function(){
        return Math.floor(Math.random()*((this.maxCust-this.minCust)+1) + this.minCust)    
    },
    avgcookies: 1.2,
    totalcookies: 0,
    salestotal: [],
    cookiesSold: function(){
        for (let i = 0; i < this.hours.length; i++){
            let avgpurchase = Math.floor(this.avgCust() * this.avgcookies)
            this.salestotal.push(this.hours[i] + " " + avgpurchase)
            this.totalcookies = this.totalcookies + avgpurchase
            }
        },
    listSales: function () {
        let newUl = document.createElement('ul');
        this.cookiesSold()
            let titleWord = document.createElement('li')
            titleWord.textContent = this.city
            newUl.appendChild(titleWord);
            for (let i = 0; i < this.salestotal.length; i++) {
    console.log(this.salestotal[i])
            let salesEL = document.createElement('li');
            salesEL.textContent = this.salestotal[i];
            newUl.appendChild(salesEL);
    
        }
            let sumtotal = document.createElement('li')
            sumtotal.textContent = 'Total number of cookies sold today ' + this.totalcookies
            newUl.appendChild(sumtotal)
        parentEL.appendChild(newUl)
    }
    }
    tokyoStand.listSales()

let DubaiStand = {
        city: 'Dubai',
        hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
        minCust: 11,
        maxCust: 38,
        avgCust: function(){
            return Math.floor(Math.random()*((this.maxCust-this.minCust)+1) + this.minCust)    
        },
        avgcookies: 3.7,
        totalcookies: 0,
        salestotal: [],
        cookiesSold: function(){
            for (let i = 0; i < this.hours.length; i++){
                let avgpurchase = Math.floor(this.avgCust() * this.avgcookies)
                this.salestotal.push(this.hours[i] + " " + avgpurchase)
                this.totalcookies = this.totalcookies + avgpurchase
                }
            },
        listSales: function () {
            let newUl = document.createElement('ul');
            this.cookiesSold()
                let titleWord = document.createElement('li')
                titleWord.textContent = this.city
                newUl.appendChild(titleWord);
                for (let i = 0; i < this.salestotal.length; i++) {
        console.log(this.salestotal[i])
                let salesEL = document.createElement('li');
                salesEL.textContent = this.salestotal[i];
                newUl.appendChild(salesEL);
        
            }
                let sumtotal = document.createElement('li')
                sumtotal.textContent = 'Total number of cookies sold today ' + this.totalcookies
                newUl.appendChild(sumtotal)
            parentEL.appendChild(newUl)
        }
        }
        DubaiStand.listSales()

    let ParisStand = {
            city: 'Paris',
            hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
            minCust: 20,
            maxCust: 38,
            avgCust: function(){
                return Math.floor(Math.random()*((this.maxCust-this.minCust)+1) + this.minCust)    
            },
            avgcookies: 2.3,
            totalcookies: 0,
            salestotal: [],
            cookiesSold: function(){
                for (let i = 0; i < this.hours.length; i++){
                    let avgpurchase = Math.floor(this.avgCust() * this.avgcookies)
                    this.salestotal.push(this.hours[i] + " " + avgpurchase)
                    this.totalcookies = this.totalcookies + avgpurchase
                    }
                },
            listSales: function () {
                let newUl = document.createElement('ul');
                this.cookiesSold()
                    let titleWord = document.createElement('li')
                    titleWord.textContent = this.city
                    newUl.appendChild(titleWord);
                    for (let i = 0; i < this.salestotal.length; i++) {
            console.log(this.salestotal[i])
                    let salesEL = document.createElement('li');
                    salesEL.textContent = this.salestotal[i];
                    newUl.appendChild(salesEL);
            
                }
                    let sumtotal = document.createElement('li')
                    sumtotal.textContent = 'Total number of cookies sold today ' + this.totalcookies
                    newUl.appendChild(sumtotal)
                parentEL.appendChild(newUl)
            }
            }
            ParisStand.listSales()

            let LimaStand = {
                city: 'Lima',
                hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
                minCust: 2,
                maxCust: 16,
                avgCust: function(){
                    return Math.floor(Math.random()*((this.maxCust-this.minCust)+1) + this.minCust)    
                },
                avgcookies: 4.6,
                totalcookies: 0,
                salestotal: [],
                cookiesSold: function(){
                    for (let i = 0; i < this.hours.length; i++){
                        let avgpurchase = Math.floor(this.avgCust() * this.avgcookies)
                        this.salestotal.push(this.hours[i] + " " + avgpurchase)
                        this.totalcookies = this.totalcookies + avgpurchase
                        }
                    },
                listSales: function () {
                    let newUl = document.createElement('ul');
                    this.cookiesSold()
                        let titleWord = document.createElement('li')
                        titleWord.textContent = this.city
                        newUl.appendChild(titleWord);
                        for (let i = 0; i < this.salestotal.length; i++) {
                console.log(this.salestotal[i])
                        let salesEL = document.createElement('li');
                        salesEL.textContent = this.salestotal[i];
                        newUl.appendChild(salesEL);
                
                    }
                        let sumtotal = document.createElement('li')
                        sumtotal.textContent = 'Total number of cookies sold today ' + this.totalcookies
                        newUl.appendChild(sumtotal)
                    parentEL.appendChild(newUl)
                }
                }
                LimaStand.listSales()
    








