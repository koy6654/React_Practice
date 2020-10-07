function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name1, price1) {
    Product.call(this, name1, price1);
    this.category = 'food';
}

function Robot(name2, price2) {
    Product.call(this, name2, price2);

}

const New = new Food('john', 25);
console.log(New);