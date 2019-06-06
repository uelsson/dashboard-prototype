const menuDrop = document.querySelector('.dashboard-wellcomeBar-menuMobileDrop');
const btnMenuOpen = document.querySelector('.dashboard-wellcomeBar-menuMobileOpen');
const btnMenuClose = document.querySelector('.dashboard-wellcomeBar-menuMobileClose');

btnMenuOpen.addEventListener('click', function(){
	menuDrop.classList.add('dashboard-wellcomeBar-menuMobileDropOpen');
});

btnMenuClose.addEventListener('click', function(){
	menuDrop.classList.remove('dashboard-wellcomeBar-menuMobileDropOpen');
});