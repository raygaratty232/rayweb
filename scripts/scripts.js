var btnMenu = document.querySelector('.btn-menu') 
var menu = document.querySelector('.menu') 
var topStick = document.querySelector('.top-stick') 
var midStick = document.querySelector('.mid-stick') 
var lowStick = document.querySelector('.low-stick') 

btnMenu.onclick = function(){
	menu.classList.toggle('active-menu')
	topStick.classList.toggle('close-top')
	midStick.classList.toggle('close-mid')
	lowStick.classList.toggle('close-low')
}
