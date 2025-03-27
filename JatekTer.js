import Lampa from "./Lampa.js";
import Info from "./Info.js";


export default class JatekTer {
  #lista = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  #lekapcsolt;

  constructor(SzElem) {
    this.SzElem = SzElem;
    this.megjelenit();
    this.esemenykezelok();
  }

  megjelenit() {
    for (let index = 0; index < this.#lista.length; index++) {
      new Lampa(this.#lista[index], index, this.SzElem);
    }
  }

  esemenykezelok() {
    window.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
      this.#lista[event.detail] = !this.#lista[event.detail];
      this.megjelenit();
    });
  }
}
