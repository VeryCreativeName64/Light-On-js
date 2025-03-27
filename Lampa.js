export default class Lampa {
    #allapot;
    #index;
    #lampaElem;
    constructor(index, szElem, allapot) {
      this.#allapot = allapot;
      this.#index = index;
      this.szElem = szElem;
      this.megjelenit();
      this.elem = document.querySelector(".elem:last-child");
      this.elem.addEventListener("click", () => {
          const esemeny = new CustomEvent("kivalaszt", { detail: this.#index });
          window.dispatchEvent(esemeny);
      });
    }
  
    megjelenit() {
      let html = `<div class="elem" style="background-color: ${this.#allapot===0?"yellow":"green"}">
                    </div>`
        this.szElem.insertAdjacentHTML("beforeend", html);
    }
  }
  