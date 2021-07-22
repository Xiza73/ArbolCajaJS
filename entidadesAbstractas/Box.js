export class Box {
    itemType;
    price = 0;
    name = "";
    id;

    constructor() {
        if (this.constructor == Box){
            throw new Error("Clase abstracta no puede ser instanciada");
        }
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name
    }
    
    getPrice(){
        return this.price
    }

    setPrice(price){
        this.price = price;
    }

    getId(){
        return this.id;
    }

    setId(id){
        this.id = id;
    }

    mount(){}

    say() {
        console.log("Hola mundo");
    }
}

