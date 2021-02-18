import { HasFormatter } from '../interfaces/HasFormatter.js';


export class Sell implements HasFormatter{
    constructor(
        readonly productName: string,
        private price: number,
        public description: string,

    ) {}

    format() {
        return `Selling ${this.productName} that costs € ${this.price} and is for ${this.description}.`
    }
}