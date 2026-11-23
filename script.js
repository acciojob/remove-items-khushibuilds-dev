//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");
const removeBtn = document.querySelector('input[type="button"]');

removeBtn.addEventListener("click", function () {
  if (colorSelect.selectedIndex !== -1) {
    colorSelect.remove(colorSelect.selectedIndex);
  }
});