(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(food, name, isHealthy) {
            if (isHealthy === void 0) { isHealthy = true; }
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.getTravelerFood = function () {
            return this.food;
        };
        Traveler.prototype.getIsHealthy = function () {
            return this.isHealthy;
        };
        Traveler.prototype.hunt = function () {
            var randomNumber = Math.random();
            if (randomNumber > .5) {
                return this.food + 100;
            }
            else
                return this.food;
        };
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food - 20;
            }
            else
                this.isHealthy = false;
            return this.isHealthy;
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.capacity < 5) {
                this.passengerArray.push(traveler);
                return "added";
            }
            else
                return "sorry";
        };
        Wagon.prototype.isQuarantined = function () {
            var quarantined = false;
            this.passengerArray.forEach(function (element) {
                if (element.getIsHealthy() == false) {
                    quarantined = true;
                }
            });
            return quarantined;
        };
        Wagon.prototype.getFood = function () {
            //let traveler:Traveler;
            var total = 0;
            this.passengerArray.forEach(function (element) {
                total = total + element.getTravelerFood();
            });
            return total;
        };
        return Wagon;
    }());
    var traveler1 = new Traveler(25, "Dan", true);
    var traveler2 = new Traveler(15, "Dillon", true);
    var traveler3 = new Traveler(35, "Becca", true);
    var traveler4 = new Traveler(25, "Cody", true);
    var traveler5 = new Traveler(45, "Chris", true);
    var wagon = new Wagon(4, []);
    console.log(traveler1.eat());
    console.log(traveler2.eat());
    console.log(traveler3.eat());
    console.log(traveler4.hunt());
    console.log(traveler5.hunt());
    var travelerArray = new Array();
    travelerArray.push(traveler1, traveler2, traveler3, traveler4, traveler5);
    console.log(travelerArray);
    travelerArray.forEach(function (element) {
        var randomNumber = Math.random();
        if (randomNumber > .5) {
            wagon.passengerArray.push(element);
        }
    });
    console.log(wagon);
    console.log(wagon.isQuarantined());
    console.log(wagon.getFood());
    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    *
    * Create wagon with an empty passenger list and a capacity of 4.
    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    *
    */
})();
