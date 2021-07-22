import { Box } from '../entidadesAbstractas/Box.js';

class BoxArray {
    constructor() {
        this.values = [];
        this.push = value => {
            if (value instanceof Box)
                this.values.push(value);
            else
                return; //throw exception
        };
        this.get = index => {
            return this.values[index];
        };
    }
}

export class BoxConcrete extends Box {
    boxList = new BoxArray();
    finalMount;

    constructor(name) {
        super();
        this.setName(name);
    }

    insertItem(item){
        this.boxList.push(item);
    }

    deleteItem(item){
        this.boxList.slice(this.boxList.indexOf(item), 1);
    }

    getItems(){
        return this.boxList;
    }

    mount(){
        this.finalMount = 0;
        this.boxList.values.forEach(e => {
            this.finalMount += parseInt(e.mount())
        })
        /*for(let item in this.boxList.values){
            console.log(item)
            this.finalMount = this.finalMount + item.mount();
        }*/

        return this.finalMount;
    }

    //recursivo
    findById(id){
        if(this.getId() === id){
            return this
        }else{
            let a = null;
            this.boxList.values.forEach(e => {
                if(e instanceof BoxConcrete){
                    if(e.findById(id) instanceof BoxConcrete){
                        a = e.findById(id)
                    }
                }
            })
            if(a) return a
        }
    }
}