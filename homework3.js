// 1)

// as you can see toyota2 does not have a logModel function
// borrow that function from toyota1 and call i, so it console.logs "Toyota Rav4"

// const toyota2 = {
//     model: 'Toyota',
//     type: 'Rav4',
// }

// const toyota1 = {
//     model: 'Toyota',
//     type: 'Camry',
//     logModel(){
//         console.log(this.model, this.type);
//     },
//     i:foo.call(toyota2)
// }


// function foo(params) {
//     console.log(this.model, this.type);
// }

// toyota1.i


// 2)

// The following code does not work turn it into working code


// const flights = {

//     flights: [],

//     priorityFlights: [],

//     scheduleFlight(flight){
//         this.flights.push(flight);
//     },

//     removeFlight(flight){
//         this.flights = this.flights.filter(flightFilter);
//         function flightFilter(f){
//             if (flight === f){
//                 return flights.priorityFlights.includes(flight);
//             }
//             return true
//         }
//     },

//     makePriorityFlight(flight){
//         this.priorityFlights.push(flight);
//     }

// }


// flights.scheduleFlight('1');
// flights.scheduleFlight('1');

// flights.makePriorityFlight('1');

// flights.removeFlight('2')

// console.log(flights.flights);


// 3)

// CarConstructor creates cars but what if someone decides to call it without new keyword,
// write a logic inside the CarConstructor function so it checks if the CarConstructor is called without
// new keyword it logs "please call me with new keyword" if not it creates a car

// function CarConstructor(model, year){
//     if(new.target){
//         this.mode = model;
//         this.year = year;
//     }
//     else{
//         console.log("please call me with new keyword")
//     }
    
// }



// CarConstructor()


// 4)

// make a new array out of objArr so that every object has the same logName function that is declared below
// use logName function do not create your own

// const objArr = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

// function logName(){
//     console.log(this.name);
// }

// let newObjArr=objArr.map(function (item) {
//     return {
//         name:item.name,
//         logName
//     }
// })

// newObjArr[2].logName()


// 5

// use foreach method and use arrayOfObjectNames function to log the fallowing objects names from the array;


// const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]

// function logArrayObjectNames(){
//     console.log(this.name);
// }

// arrayOfObjectNames.forEach(function (elem) {
//     logArrayObjectNames.call(elem)
// })

// //6

// const mappedFunc = arrayOfObjectNames.map( (item) => {
//     return item= function (index) {
//         console.log(arrayOfObjectNames[index].name);
//     }
// } );

// mappedFunc.forEach((i,index) => {
//     i(index)
// }
// )
//7

// const exampleOfAlreadyCreatedObject = {
//     id: 1,
//     model: 'Toyota',
//     year: '1996',
//     color: 'red',
//     driveTrain: '4x4',
// }


// function CreateCar(id, model, year, color, driveTrain){
//     this.id=id,
//     this.model=model,
//     this.year=year,
//     this.color=color,
//     this.driveTrain=driveTrain
// }

// // please take a look at the the inventory object and implement the missing methods

// const inventory = {

//     cars: [],

//     addCar(car) {
//         this.cars.push(car)
//     },

//     removeCar(id) {
//         this.cars.forEach((item,index)=>{
//             if(item.id===id){
//                 this.cars.splice(index,1)
//             }
//         })
//     },

//     listCars(){
//         this.cars.forEach((item)=>console.log(item))
//     },

//     listCarsByConditionCallback(conditionCallback){
//         // this function should accept a parameter conditionCallback, which is a function,
//         // the conditionCallback would be called on every car with that car passed to conditionCallback
//         // if conditionCallback returns true then the car is logged into console.
//         // please implement it

//         for(i=0;i<this.cars.length;i++){
//             if(conditionCallback(this.cars[i])){
//                 return true
//             }
//         }
//         return false


//     }

// }


// inventory.addCar(new CreateCar(1, 'Toyota', '1996', 'red', '4x4'));
// inventory.addCar(new CreateCar(2, 'Mercedes', '2000', 'white', 'rear wheel drive'));
// inventory.addCar(new CreateCar(3, 'BMW', '2020', 'black', 'rear wheel drive'));
// inventory.removeCar(2);
// inventory.listCars();
// let kk= inventory.listCarsByConditionCallback( (car) => car.model === 'BM' && car.year === '2020' );
// console.log(kk);

//8
// function Song(name,song) {
//     this.name=name,
//     this.song=song
//     this.play=function (params) {
//         console.log(this.name);
//     }
// }

// let sing = new Song("Shakira","Waka Waka")
// sing.play()
// console.log(sing);

//9
//mkdir Workshop_4 => git init => git add . =>git commit -m "name" =>git branch x_branch

//10
//mkdir Workshop_4 => touch index.js=>git init=>git add . =>git commit -m "first" =>
//git branch rename_me =>git branch delate_me =>$ git branch -m rename_me renamed_branch=>
//git branch -D delate_me



//11
const checkKnow = {
    surname: 'surname',
    name: 'checkKnow',
    foo: {
        name: 'foo',
        logName(){
            console.log(this.surname);
        }
    },
    boo(){
        const obj = {
            name: 'boo method',
            check: () => {
                console.log(this.name);
            }
        }
        obj.check();
    }
}


checkKnow.foo.logName();
//tpum e undefined vorovhetev logName i this @ window n e hetevabar chuni surname property 

checkKnow.boo();
//qani vor check function@ stexcvel e boo function i mej hetevabar this @ havasar e boo i this in vor@ checkKnow objectn e hetevabar ktpi checkKnow