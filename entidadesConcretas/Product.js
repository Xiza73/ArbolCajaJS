import { Box } from '../entidadesAbstractas/Box.js'

export class Product extends Box {
    constructor(price){
        super();
        this.setPrice(price);
        this.setName(price)
    }

    mount(){
        return this.getPrice();
    }
}