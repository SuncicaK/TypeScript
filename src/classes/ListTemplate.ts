import { HasFormatter } from '../interfaces/HasFormatter.js';

export class ListTemplate {
    constructor(private container: HTMLUListElement){}

    render(item: HasFormatter, heading: string, position: 'start'|'end'){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const pos = document.createElement('pos');
        pos.innerText = item.format();
        li.append(pos);

        if(position === 'start') {
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }
    }
}