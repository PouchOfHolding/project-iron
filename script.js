/* 1. Opens the main menu */
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/* 2. NEW: Opens the nested submenus */
function toggleSubmenu(event, id) {
    // 1. Stop the click from closing the main menu
    event.stopPropagation(); 
    
    // 2. Find ALL the nested submenus on the page
    var subDropdowns = document.getElementsByClassName("dropdown-submenu-content");
    
    // 3. Loop through every single one of them...
    for (var i = 0; i < subDropdowns.length; i++) {
        // ...and if it is NOT the one you just clicked, force it to close!
        if (subDropdowns[i].id !== id) {
            subDropdowns[i].classList.remove('show');
        }
    }

    // 4. Finally, open (or close) the specific one you actually clicked
    document.getElementById(id).classList.toggle("show");
}

/* 3. UPDATED: Closes all menus if you click outside of them */
window.onclick = function(event) {
  // If the user clicks anywhere that ISN'T a dropdown button...
  if (!event.target.matches('.dropbtn') && !event.target.matches('.sub-dropbtn')) {
    
    // Close main menus
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
    
    // Close nested submenus
    var subDropdowns = document.getElementsByClassName("dropdown-submenu-content");
    for (var j = 0; j < subDropdowns.length; j++) {
      if (subDropdowns[j].classList.contains('show')) {
        subDropdowns[j].classList.remove('show');
      }
    }
  }
}