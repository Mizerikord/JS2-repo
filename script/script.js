class GoodsList {
    constructor(conteiner = ".goods"){
//К чему обращаются this здесь и какова логика применения его вообще во всем коде? 
//Вроде this должен давать ссылку на используемый объект, здесь же он использется везде...
//Каков порядок выполнения кода браузером?
    this.conteiner = document.querySelector(conteiner);
    this.goods = [];
    this.productsItem = [];
    this.importGoods();
    this.render();
    this.totalCost();
    }

    importGoods(){
        this.goods = [
            {id: '1', title: 'Shirt', price: 150, img: 'img/Shirt.jpg'},
            {id: '2', title: 'Socks', price: 50, img: 'img/Socks.jpg'},
            {id: '3', title: 'Jacket', price: 350, img: 'img/Jacket.jpg'},
            {id: '4', title: 'Shoes', price: 250, img: 'img/Shoes.jpg'}
        ];
    }

    render(){
        for (const product of this.goods){
            const productItem = new GoodsItem(product)
            this.productsItem.push(productItem);
            this.conteiner.
            insertAdjacentHTML('beforeend', productItem.renderGoodsItem());
        }
    }
    totalCost(){
        let total = this.goods.reduce(function (sum, elem){return Number(sum)+elem.price},'');
        console.log(total);
    }
}

class GoodsItem{
    constructor(product, img = 'https://imgholder.ru/100x100/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'){
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = product.img;
    }
    renderGoodsItem = (id = "undefined", title = 'Товара нет', price = "0", 
        img = "https://imgholder.ru/100x100/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson") => {
        
        return `<div class="goods-list" data-id="${this.id}">
        <img class="goods-list-img" src="${this.img}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="add-to-cart">Добавить</button>
        </div>`;
        };
}

new GoodsList();

class Basket{
    constructor(items){

    }
}

class BuyBasket{
    
}


// //Список товара
// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
//     ];

// //Отрисовка товара на странице
// const renderGoodsItem = (title = 'Shirt', price = 150) => {
//     return `<div class="goods-list">
//     <img class="goods-list-img" src="https://imgholder.ru/100x100/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson" alt="">
//     <h3>${title}</h3>
//     <p>${price}</p>
//     <button class="add-to-cart">Добавить</button>
//     </div>`;
//     };

// //Вывод товара построчно + снятие запятых в конце
// const renderGoodsList = (list) => {
//     document.querySelector(".goods").innerHTML = list.
//     map(item => renderGoodsItem(item.title, item.price)).join('');
//     }
//     renderGoodsList(goods);
