export default class Lampa {
    #allapot;
    #index;
    #lampaElem;
    constructor(index, SzElem, allapot) {
      this.#allapot = allapot;
      this.#index = index;
      this.#lampaElem = SzElem;  
      this.SzElem = SzElem;
      this.megjelenit();
      this.elem = document.querySelector(".elem:last-child");
      this.elem.addEventListener("click", () => {
          const esemeny = new CustomEvent("kivalaszt", { detail: this.#index });
          window.dispatchEvent(esemeny);
      });
    }
  
    megjelenit() {
      
      console.log(`Lámpa #${this.#index} állapota: ${this.#allapot}`);
    }
  }
  