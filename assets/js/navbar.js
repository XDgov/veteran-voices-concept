(function() {
  var dropdownParents = document.getElementsByClassName("dropdown-parent"),
      searchButton = document.getElementById("nav-search-button"),
      searchInput = document.getElementById("nav-search-input");

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
 
  searchInput.oninput = function() { showAutoComplete() };

  function showAutoComplete() {
    var autoComplete = document.getElementById("autocomplete");

    console.log("add class");

    autoComplete.classList.add("active");
  };

  function showDropdown(a) {
    var dropdown = a.target.nextElementSibling;

    dropdown.classList.toggle("active");
  };

  function showSearchBar(elem) {
    var searchParent = document.getElementById("nav-search-container");

    searchParent.classList.add("active");
  };
})();