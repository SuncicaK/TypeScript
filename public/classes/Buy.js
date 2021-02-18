export class Buy {
    constructor(productName, price, description) {
        this.productName = productName;
        this.price = price;
        this.description = description;
    }
    format() {
        return `Buying ${this.productName} that costs € ${this.price} and is for ${this.description}`;
    }
}
