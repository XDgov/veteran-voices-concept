(function() {
  var dropdownParents = document.getElementsByClassName("dropdown-parent");

  document.querySelectorAll('.dropdown-parent').forEach(function(a) {

    a.addEventListener("click", function(event) {
      event.preventDefault();
      showDropdown(event);
    });
      // Now do something with my button
  });

  function showDropdown(a) {
    var dropdown = a.target.nextElementSibling;

    dropdown.classList.toggle("active");
  }
})();