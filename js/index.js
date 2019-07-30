const mainContent = document.querySelector(".main-content");
const navItems  = document.querySelectorAll(".navigation ul li a");
let urlHome = "./partials/home.html";
let urlPortfolio = "./partials/portfolio.html";
alert("link");

function pageload() {
     fetch(urlHome)
        .then(function (response) {
            return response.text();
        })
        .then(function (homeContent) {
            mainContent.innerHTML = homeContent;
        })
        .catch(function (error) {
            console.log(error.message);
        });
}



function showContent (ev) {
    let eventTargetObject = ev.target;
    
    eventTargetObject.setAttribute("id", "active-menu");

    for (let i = 0; i < navItems.length; i++) {
        if (navItems[i] !== eventTargetObject) {
            navItems[i].removeAttribute("id", "active-menu");
        }
    }
    
    
    let navLabel = eventTargetObject.textContent;
    if (navLabel === "Home") {
        
        fetch(urlHome)
            .then(function (response) {
                return response.text();
            })
            .then(function (homeContent) {
                mainContent.innerHTML = homeContent;
            })
            .catch(function (error) {
                console.log(error.message);
            });
    } else if (navLabel === "Portfolio") {
        
        fetch(urlPortfolio)
        .then(function (response) {
            return response.text();
        })
        .then(function (portfolioContent) {
            mainContent.innerHTML = portfolioContent;
        })
        .catch(function (error) {
            console.log(error.message);
        });
    } 
}




for (let navItem of navItems) {
    navItem.addEventListener("click", showContent);
}
