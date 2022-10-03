export const monthlyPayment = document.getElementById("monthly-payment");
export const dealAmount = document.getElementById("deal-amount");
export const fmt = new Intl.NumberFormat("ru-RU");

export function calculateLeasingResults(percent, auto, initialFee, evt) {
    initialFee.value = Math.round((percent.value / 100) * auto.value);
    const result = Math.round(
        (auto.value - +initialFee.value) *
        ((0.035 * Math.pow(1 + 0.035, evt.target.value)) /
            (Math.pow(1 + 0.035, evt.target.value) - 1))
    );
    monthlyPayment.value = fmt.format(result);
    dealAmount.value = fmt.format(+initialFee.value + evt.target.value * result);
}

export function calculateAutoResults(percent, leasingTime, initialFee, evt) {
    initialFee.value = Math.round((percent.value / 100) * evt.target.value);
    const result = Math.round(
        (evt.target.value - +initialFee.value) *
        ((0.035 * Math.pow(1 + 0.035, leasingTime.value)) /
            (Math.pow(1 + 0.035, leasingTime.value) - 1))
    );
    monthlyPayment.value = fmt.format(result);
    dealAmount.value = fmt.format(+initialFee.value + leasingTime.value * result);
}

export function calculatePercentResults(auto, leasingTime, initialFee, evt) {
    initialFee.value = Math.round((evt.target.value / 100) * auto.value);
    const result = Math.round(
        (auto.value - +initialFee.value) *
        ((0.035 * Math.pow(1 + 0.035, leasingTime.value)) /
            (Math.pow(1 + 0.035, leasingTime.value) - 1))
    );
    monthlyPayment.value = fmt.format(result);
    dealAmount.value = fmt.format(+initialFee.value + leasingTime.value * result);
}
