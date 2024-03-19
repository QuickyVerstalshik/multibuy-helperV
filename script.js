const qty = document.querySelector(".market_multi_table thead td");
const price = document.querySelector("tr").lastElementChild;

const htmlQty = `<input type="number" min="0" value="1" class="multibuy-input">`;
const htmlPrice = `<input type="number" min="0" value="20" class="multibuy-percent" placeholder="%"><button class="multibuy-button">ADD%</button>`;

qty.innerHTML = htmlQty;
price.innerHTML = htmlPrice;

const multiInput = document.querySelector(".multibuy-input");
const multiPercent = document.querySelector(".multibuy-percent");
const multiButton = document.querySelector(".multibuy-button");

const onChange = (value) => {
    let qtyInputs = document.querySelectorAll(".market_multi_quantity");
    for (let i = 0; i < qtyInputs.length; i++) {
        qtyInputs[i].value = value;
    }
};

const onPercent = (value) => {
    let priceInputs = document.querySelectorAll(".market_multi_price");
    for (let i = 0; i < priceInputs.length; i++) {
        // console.log(
        //     priceInputs[i].value + (priceInputs[i].value * value) / 100
        // );
        // priceInputs[i].value =
        //     parseInt(priceInputs[i].value) +
        //     (parseInt(priceInputs[i].value) * value) / 100;
        // priceInputs[i].value = priceInputs[i].value.replace(/[.]/g, ",");
        let unT = priceInputs[i].value.split("");
        unT.length = unT.length - 1;

        let num = parseFloat(unT.join("").replace(",", "."));

        priceInputs[i].value = (num + (num * value) / 100)
            .toFixed(2)
            .replace(/[.]/g, ",");
    }
};

multiInput.addEventListener("input", () => onChange(multiInput.value));
multiButton.addEventListener("click", () => onPercent(multiPercent.value));

console.log("эпик гей");
