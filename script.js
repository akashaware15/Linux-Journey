document.getElementById("select").addEventListener("change", function() {
    let selectedOption = this.options[this.selectedIndex];
    document.getElementById("selected-flag").src = selectedOption.getAttribute("data-image");
  });