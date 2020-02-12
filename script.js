$(document).ready(function(){

$( ".info p" ).hide();
$( ".info" ).hide();

$( "feature" ).delegate( ".col", "click", function (e) {
	
	$( ".info" ).show();
	

	function use(cur){

		cur = cur[0];

		$( ".info p" ).hide();
		$( e.currentTarget ).fadeTo("slow", 0.1);
		$( `.info #${cur}` ).show();
	}
	function del(){
		$( e.currentTarget ).fadeTo("slow", 1);	
	}

	use(e.currentTarget.id);
	del();
  });

	$( ".menu ul li" ).on("click", function(event){
		event.currentTarget.style.backgroundColor = "mediumblue";
		setTimeout(()=>{
			event.currentTarget.style.backgroundColor = "blue";
		}, 1000);
	});


	$(".gallery_picture").delegate("img", "click", function(event){
		
		var target = event.currentTarget.getAttribute('class');
		
		function show(target){
			$(`.${target}`).removeClass(`${target}`);
		};
		
		$(this).addClass('show');

		show(target);

		

	});

	//

let deadline = '2020-02-31';
	function getTimeRemaining(endtime){
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000)%60), 
		//Отсаточное время переводим из миллисекунд в секунды, зачем вычленямтоллько остаточное 60 (т.к 60 секунд) а в конце округляем все.
		minutes = Math.floor((t/1000/60)% 60),
		//hours = Math.floor((t/1000/60/60)%24) ;
		hours = Math.floor((t/(1000*60*60)));
		return{
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}
	function setClock(id, endtime){
		let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds'),
		timeInterval = setInterval(updateClock, 1000);

		function updateClock(){
			let t = getTimeRemaining(endtime);

			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if(t.total <= 0){
				clearInterval(timeInterval);

			}
		}
	}
	setClock('timer', deadline);

	

 });
