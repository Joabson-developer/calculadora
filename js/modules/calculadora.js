import { ZERO, NUMBERS, OFF, ONCE, DOT, ADDITION } from "./digits.js";

export default (display, elements) => {
  const storage = [];
  let waiting = false;

  const on = () => {
    display.value = "0";
  };

  const off = () => {
    display.value = "";
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
      display.value === ZERO
        ? (display.value = digit)
        : (display.value += digit);
    }

    // operations
    if (digit === ADDITION) {
      storage.push(display.value);

      console.log(storage);
    }
  };

  elements.forEach((element) => element.addEventListener("click", controls));
};
