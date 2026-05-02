class Car{
    constructor(brand, model, year, color){
        this.brand = brand
        this.model = model
        this.year = year
        this.color = color
    }
    info(){
        console.log(`Սա ${this.brand} ${this.model} է, ${this.color} գույնի, արտադրված ${this.year} թվականին`)
    }
    getAge(){
        const now = new Date().getFullYear()
        return now - this.year
    }
}

const car1 = new Car("Mercedec", "W211", 2006, "moxraguyn")
const car2 = new Car("BMW", "M5", 2020, "spitak")

const cars = [car1, car2]
cars.forEach(car => {
    car.info()
    
});