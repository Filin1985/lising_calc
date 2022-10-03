export const rangeInputs = document.querySelectorAll('input[type="range"]');
export const numberInputs = document.querySelectorAll('input[type="number"]');
export const buttonSave = document.querySelector(".button_type_save");

export function postResults(e) {
    e.preventDefault();
    buttonSave.disabled = true
    rangeInputs.forEach(input => {
        input.disabled = true
    })
    numberInputs.forEach(input => {
        input.disabled = true
    })
    fetch("https://eoj3r7f3r4ef6v4.m.pipedream.net", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((e) => {
            setTimeout((e) => {
                buttonSave.disabled = false
                rangeInputs.forEach(input => {
                    input.disabled = false
                })
                numberInputs.forEach(input => {
                    input.disabled = false
                })
            }, 3000)
        })
        .catch((err) => {
            console.log(err);
        })
}
