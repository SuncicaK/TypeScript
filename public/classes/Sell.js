export class Sell {
    constructor(productName, price, description) {
        this.productName = productName;
        this.price = price;
        this.description = description;
    }
    format() {
        return `Selling ${this.productName} that costs € ${this.price} and is for ${this.description}.`;
    }
}
