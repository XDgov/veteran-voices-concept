(function() {
  var dropdownParents = document.getElementsByClassName("dropdown-parent"),
      searchButton = document.getElementById("nav-search-button");

  document.querySelectorAll('.dropdown-parent').forEach(function(a) {

    a.addEventListener("click", function(event) {
      event.preventDefault();
      showDropdown(event);
    });
      // Now do something with my button
  });

  searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    showSearchBar(event);
  });

  function showDropdown(a) {
    var dropdown = a.target.nextElementSibling;

    dropdown.classList.toggle("active");
  };

  function showSearchBar(elem) {
    var searchParent = document.getElementById("nav-search-container");

    searchParent.classList.add("active");
  };
})();