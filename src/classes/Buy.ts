import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Buy implements HasFormatter{
    constructor(
        readonly productName: string,
        private price: number,
        public description: string,

    ) {}

    format() {
        return `Buying ${this.productName} that costs € ${this.price} and is for ${this.description}.`
    }
}