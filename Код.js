document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".min-line");
    const menu = document.querySelector(".item1");
    const menuButton2 = document.querySelector(".1-spisok");
    const menu2 = document.querySelector(".c-spisok1");

    
    function toggleMenu(menu) {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    }

    
    menuButton.addEventListener("click", function() {
        toggleMenu(menu);
    });

  
    menuButton2.addEventListener("click", function() {
        toggleMenu(menu2);
    });


    window.addEventListener("resize", function() {
        if (window.innerWidth > 1200) {
            menu.style.display = "none"; 
        }
        if (window.innerWidth > 1000) {
            menu2.style.display = "none"; 
        }
    });
});
