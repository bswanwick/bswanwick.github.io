var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = dayOfWeek + " " + curMonth + " " + dayOfMonth + ", " + curYear;
var time = curHour + ":" + curMinute + " " + curMeridiem;

document.getElementById('currentDate').textContent = today;
document.getElementById('currentTime').textContent = time;


/* click handler for navbuttons */
Array.from(document.getElementsByClassName('navButton')).forEach( (element) => {
	element.addEventListener('click', (event) => {
		let index = event.target.getAttribute('data-button-index');
		Array.from(document.getElementsByClassName('slideOut')).forEach( i=> {
			/* slideOut toggles */
			if (i.getAttribute('data-button-index')==index)
				i.classList.toggle('open');
			else
				i.classList.remove('open');
			
			/* close other slideOutButton dropdowns if active */
			let maybeActive = i.querySelector('.slideOutButton.active')
			if(maybeActive){
				maybeActive.classList.remove('active');
			}
		});
		Array.from(document.getElementsByClassName('navButton')).forEach( i=> {
			if (i.getAttribute('data-button-index')==index) 
				i.classList.toggle('open');
			else
				i.classList.remove('open');
		});
	})
});

/* click handler for slideOutButton (dropdown) */
Array.from(document.getElementsByClassName('hasDropdown')).forEach( (element) => {
	element.addEventListener('click', (event) => {
		Array.from(document.getElementsByClassName('slideOutButton')).forEach((activeElement)=>{
			/* close other slideOutButton dropdowns if active */
			if(element != activeElement && activeElement.classList.contains('active'))
				activeElement.classList.remove('active')	
		});

		if(element.classList.contains('active')){
			element.classList.remove('active');
			document.getElementsByClassName('slideOutButtonContainer')[0].classList.add('scrollEnabled');
		}else{
			element.classList.add('active');
			document.getElementsByClassName('slideOutButtonContainer')[0].classList.remove('scrollEnabled');
		}

	})
});