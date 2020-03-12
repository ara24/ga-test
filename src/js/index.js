import "../css/style.css";
import numbers from "./module";

class square {
  constructor(numbers) {
    this.numbers = numbers;
  }

  get() {
    document.querySelector("#result").innerText = this.numbers.map(x => x * 2);
  }
}

const test = new square(numbers);
test.get();