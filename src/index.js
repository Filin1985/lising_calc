import "./styles/index.css";
import { handleInputChange } from "./components/input.js";
import {
  calculateAutoResults,
  calculateLeasingResults,
  calculatePercentResults,
  monthlyPayment,
  dealAmount,
  fmt,
} from "./components/result.js";
import {
  postResults,
  rangeInputs,
  numberInputs,
  buttonSave,
} from "./components/server.js";

const calculatorForm = document.querySelector(".calculator__form");
const percent = document.getElementById("percent");
const initialFee = document.getElementById("initial-fee");
const auto = document.getElementById("auto");
const paymentRange = document.getElementById("paymentRange");
const autoRange = document.getElementById("autoRange");
const leasing = document.getElementById("leasing");
const leasingRange = document.getElementById("leasingRange");
const leasingTime = document.getElementById("leasing");

monthlyPayment.value = fmt.format(monthlyPayment.value);
dealAmount.value = fmt.format(dealAmount.value);

percent.addEventListener("input", (evt) => {
  if (evt.target.value > 60) {
    evt.target.value = 60;
  }
  calculatePercentResults(auto, leasingTime, initialFee, evt);
});

paymentRange.addEventListener("input", (evt) => {
  if (evt.target.value > 60) {
    evt.target.value = 60;
  }
  calculatePercentResults(auto, leasingTime, initialFee, evt);
});

auto.addEventListener("input", (evt) => {
  if (evt.target.value > 6000000) {
    evt.target.value = 6000000;
  }
  calculateAutoResults(percent, leasingTime, initialFee, evt);
});

autoRange.addEventListener("input", (evt) => {
  if (evt.target.value > 6000000) {
    evt.target.value = 6000000;
  }
  calculateAutoResults(percent, leasingTime, initialFee, evt);
});

leasing.addEventListener("input", (evt) => {
  if (evt.target.value > 60) {
    evt.target.value = 60;
  }
  calculateLeasingResults(percent, auto, initialFee, evt);
});

leasingRange.addEventListener("input", (evt) => {
  if (evt.target.value > 60) {
    evt.target.value = 60;
  }
  calculateLeasingResults(percent, auto, initialFee, evt);
});

// Каждому полю range добавляем событие input
rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

// Каждому полю input добавляем событие input
numberInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

// При отправке формы отменяем действие по умолчанию
calculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Отправляем данные на сервер
buttonSave.addEventListener("click", postResults);
