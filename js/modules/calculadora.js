import { ZERO, NUMBERS, OFF, ONCE, DOT, ADDITION } from "./digits.js";

Array.prototype.lastItem = function () {
  return [...this].pop();
};

export default (display, elements) => {
  const storage = [];

  const on = () => {
    display.value = "0";
  };

  const off = () => {
    display.value = "";
  };

  const operation = (callback) => {
    const lastNumber = +storage.lastItem() || 0;
    storage.push(display.value);
    const currentNumber = +storage.lastItem();

    display.classList.add("is-working");

    display.value = callback(lastNumber, currentNumber);
    storage.push(display.value);
  };

  const controls = ({ currentTarget }) => {
    const { digit } = currentTarget.dataset;

    if (digit === ONCE) on();

    if (digit === OFF) off();

    const theDisplayIsEmpty = display.value === "";
    if (theDisplayIsEmpty) return;

    const thereIsADotOnTheDisplay = display.value.includes(DOT);
    if (digit === DOT && !thereIsADotOnTheDisplay) display.value += digit;

    if (NUMBERS.includes(digit)) {
      if (display.value === ZERO || display.classList.contains("is-working")) {
        display.classList.remove("is-working");
        display.value = digit;
      } else {
        display.value += digit;
      }
    }

    // operations
    if (digit === ADDITION)
      operation((lastNumber, currentNumber) => lastNumber + currentNumber);
  };

  elements.forEach((element) => element.addEventListener("click", controls));
};
