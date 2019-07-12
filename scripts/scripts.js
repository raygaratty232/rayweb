window.onload = function(){

	var inp_email = document.querySelector('input[name=email]')
	var inp_phone = document.querySelector('input[name=phone]')
	var inp_name = document.querySelector('input[name=name]')


	var sendBtn = document.querySelector('.send-btn');

	sendBtn.addEventListener('click' , function(){
		var params = 'email= ' + inp_email.value + '&' +'phone=' + inp_phone.value + '&' +'name=' + inp_name.value;
		ajaxPost(params)
	}) 

	function ajaxPost(params){
		var request = new XMLHttpRequest();

		request.onreadystatechange = function(){
			if(request.readyState == 4 && request.status == 200){
				if(request.responseText == '1'){
					document.querySelector('.out').innerHTML = 'get Work';	
					document.querySelector('form').style.display = 'none';
				}
				else{
					document.querySelector('.out').innerHTML = request.responseText;	
				}
				

			}
		}

		request.open('POST' , '../app.php');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		request.send(params);
	}


	var btnMenu = document.querySelector('.btn-menu') 
	var menu = document.querySelector('.menu') 
	var topStick = document.querySelector('.top-stick') 
	var midStick = document.querySelector('.mid-stick') 
	var lowStick = document.querySelector('.low-stick') 

	btnMenu.onclick = function(){
		menu.classList.toggle('active-menu')
		this.classList.toggle('down-close')
		topStick.classList.toggle('close-top')
		midStick.classList.toggle('close-mid')
		lowStick.classList.toggle('close-low')
	}

}


