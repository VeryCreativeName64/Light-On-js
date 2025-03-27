import { Lampa } from "./Lampa.js";
import Info from "./Info";

export default class JatekTer{
    #lista=[0,0,0,0,0,0,0,0,0];
    #lekapcsolt;
    constructor(SzElem) {
        this.#lista = lista;
        this.#lekapcsolt = lekapcsolt;
        this.SzElem=SzElem;
        this.megjelenit();
    }

    megjelenit(){
        for (let index = 0; index < this.#lista.length; index++) {
            new Lampa(this.#lista[index], index, this.SzElem);
            
        }
    }
}