
function cityTaxes(name , population , treasury){
    return {
name , population, treasury , 
taxeRate: 10 , 
collectionTaxes (){
    this.population += Math.floor(this.population*this.taxeRate)
} ,
applyGrowth(percentage){
    this.population += Math.floor(this.population*percentage/100)
},
applyRecession(percentage){
    this.treasury-=Math.floor(this.treasury*percentage/100)
}
    }
    
}
const city =

cityTaxes('Tortuga',

7000,

15000);

cityTaxes.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population)