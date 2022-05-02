import "./style.scss";

export class Scroller {
  el: HTMLElement;
  client: number;
  constructor(el: HTMLElement) {
    this.el = el;
    this.client = this.el.scrollHeight - this.el.clientHeight;
    this.init();
  }
  init(): void{
    // this.el.classList.add("scrollers");
    // var ss = document.styleSheets[0];
    // ss.insertRule('scrollers::-webkit-scrollbar {background-color: red !important}', 0);
    console.log("%cScrollerJS", "color: #bada55", "Init");
  }
  interativty() {
    this.el.addEventListener("mouseover", () => {
      console.log("%cScrollerJS", "color: #bada55", "Mouseover");
    });
    this.el.addEventListener("mouseout", () => {
      console.log("%cScrollerJS", "color: #bada55", "Mouseout");
    });
  }
}
