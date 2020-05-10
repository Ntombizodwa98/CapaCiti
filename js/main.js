(function(){
	var menuContainer = document.querySelector(".menu-container");
	var menuToggler = document.querySelector(".menu-toggler");
	
	var searchText = document.querySelector(".custom-search-input > input[type='text']");
	var toggleMenu = function(){
		menuContainer.style.display = (menuContainer.style.display || window.getComputedStyle(menuContainer).getPropertyValue("display")) == "flex" ? "none" : "flex";
	};
	
	var toggleMenuToggler = function(){
		if(menuToggler.classList.contains("menu-toggler-close")){
			menuToggler.classList.remove("menu-toggler-close");
		}else{
			menuToggler.classList.add("menu-toggler-close");
		}
	};
	
	menuToggler.addEventListener("click", function(e){
		e.preventDefault();		
		toggleMenu();
		toggleMenuToggler();
	}, false);
	
	searchText.addEventListener("focus", function(){
		this.parentElement.classList.add("focus")
	}, false);

	searchText.addEventListener("blur", function(){
		this.parentElement.classList.remove("focus");
	}, false);
}())