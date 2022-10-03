export function handleInputChange(e) {
  e.preventDefault();
  let target = e.target;
  if (e.target.type !== "range") {
    target = e.target
      .closest(".calculator__field")
      .querySelector(".calculator__range");
  }
}
