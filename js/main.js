import { BoxConcrete } from "../entidadesConcretas/BoxConcrete.js";
import { Product } from "../entidadesConcretas/Product.js";

//variables
const app = document.querySelector('#app');
var list = {};
var tree = document.querySelector("#tree");
let boxSelected;
let n = 0;
//buttons
const genBoxBtn = document.querySelector('#genBox')
const insertBoxBtn = document.querySelector('#insertBox')
const insertProductBtn = document.querySelector('#insertProduct')
insertBoxBtn.hidden = true
insertProductBtn.hidden = true
var boxButtons;
//inputs
const inputBox = document.querySelector('#boxName')
const inputProduct = document.querySelector("#productName")
inputProduct.hidden = true

//FUNCTIONS
const clean = () => {
    inputBox.value = ""
    inputProduct.value = ""
}

const updateBoxSelected = (box) => {
    let bs = document.querySelector(`#${boxSelected.getId()}`)
    bs.classList.remove('selected')
    boxSelected = box;
    bs = document.querySelector(`#${boxSelected.getId()}`)
    bs.classList.add('selected')
    console.log(boxSelected)
}

const updateButtonEvents = () => {
    boxButtons = document.getElementsByClassName('box')
    for(let i = n; i < boxButtons.length; i++){
        boxButtons.item(i).addEventListener('click', () => {
            let b = list.findById(boxButtons.item(i).id)
            updateBoxSelected(b)
            alert(`Monto Total: ${b.mount()}`);
        })
    }
    n = boxButtons.length
}

const paint = () => {

}

const generateBox = () => {
    const name = document.getElementById("boxName").value;
    
    if(name){
        list = new BoxConcrete(name);
        list.setId(`b${n}`)
        
        const boxContainer = document.createElement("div");
        boxContainer.className = "box";
        boxContainer.id = list.getId();
        boxContainer.appendChild(document.createTextNode(list.getName()));
        tree.appendChild(boxContainer);

        boxButtons = document.getElementsByClassName('box')
        updateButtonEvents();
        boxSelected = list;
        updateBoxSelected(list);

        genBoxBtn.hidden = true;
        insertBoxBtn.hidden = false;
        insertProductBtn.hidden = false;
        inputProduct.hidden = false;
        clean();
    }
}

const insertBox = () => {
    const name = document.getElementById("boxName").value;

    if(name){
        const box = new BoxConcrete(name)
        box.setId(`b${n}`)

        const boxContainer = document.createElement("div");
        boxContainer.className = "box";
        boxContainer.id = box.getId();
        boxContainer.appendChild(document.createTextNode(box.getName()));
        //dibujar
        paint()
        tree.appendChild(boxContainer);
        
        list.findById(boxSelected.id).insertItem(box)
        updateButtonEvents();
        updateBoxSelected(box);
        clean();
    }
}

const insertProduct = () => {
    const name = document.getElementById("productName").value;

    if(name){
        const box = new Product(name)
        //cambiar list por padre
        box.setId(`p${n}`)

        const boxContainer = document.createElement("div");
        boxContainer.className = "product";
        boxContainer.id = box.getId();
        boxContainer.appendChild(document.createTextNode(box.getName()));
        paint()
        tree.appendChild(boxContainer);

        //updateButtonEvents();
        //updateBoxSelected(box.getId);

        list.findById(boxSelected.id).insertItem(box)
        clean();
    }
}

async function waitClick () {
    return (
        await game
        /*.then((ev) => {
        onConfirm()
        window.console.log(ev)
        })
        .catch(() => onCancel())*/
    )  
}

//APP
const game = new Promise((resolve, reject) => {
    genBoxBtn.addEventListener('click', generateBox)
    insertBoxBtn.addEventListener('click', insertBox)
    insertProductBtn.addEventListener('click', insertProduct)
    updateButtonEvents() 
})

waitClick()
    .then(() => {
        alert('Abc')
    })


