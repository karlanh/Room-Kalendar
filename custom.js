function leftFunction() {
	var rightDiv = document.getElementById('right');
	rightDiv.innerHTML = '';
	rightDiv.removeAttribute('onclick');
	rightDiv.style.backgroundColor = "transparent";
	rightDiv.style.opacity = "1";

	var room1 = document.createElement("div");
	room1.setAttribute('id', 'room1')
	room1.setAttribute('onclick', 'room("1")');
	var text = document.createElement("div");
	text.innerHTML='Education Room';
	text.setAttribute('class', 'roomtext');
	text.setAttribute('id', 'text1');
	room1.append(text);

	var room2 = document.createElement("div");
	room2.setAttribute('id', 'room2')
	room2.setAttribute('onclick', 'room("2")');
	var text2 = document.createElement("div");
	text2.innerHTML='Middle Room';
	text2.setAttribute('class', 'roomtext');
	text2.setAttribute('id', 'text2');
	room2.append(text2);

	var room3 = document.createElement("div");
	room3.setAttribute('id', 'room3')
	room3.setAttribute('onclick', 'room("3")');
	var text3 = document.createElement("div");
	text3.innerHTML='Room with a View';
	text3.setAttribute('class', 'roomtext');
	text3.setAttribute('id', 'text3');
	room3.append(text3);

	rightDiv.appendChild(room1);
	rightDiv.appendChild(room2);
	rightDiv.appendChild(room3);
}

function rightFunction() {
	var leftDiv = document.getElementById('left');
	leftDiv.style.backgroundColor = "transparent";
	leftDiv.style.opacity = "1";
	leftDiv.innerHTML = '';
	leftDiv.removeAttribute('onclick');
	var room4 = document.createElement("div");
	room4.setAttribute('id', 'room4')
	room4.setAttribute('onclick', 'room("4")');
	var text4 = document.createElement("div");
	text4.innerHTML='Board Room';
	text4.setAttribute('class', 'roomtext');
	text4.setAttribute('id', 'text4');
	room4.append(text4);
	leftDiv.appendChild(room4);
}

function room(number) {
	if (number == 1){
		document.getElementById('left').remove();
		calendar = document.getElementById('right');
		calendar.setAttribute("style","width:60%;height:80%;opacity:1;margin-top:5%;")
		calendar.innerHTML = '<iframe src="https://calendar.google.com/calendar/selfsched?sstoken=UUxkSWtzUUt3U1F3fGRlZmF1bHR8ZTQwZjZjZTYzMjczNzFlMWYxNzIxN2NlZjliY2EwMmY" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>';
	}
	else if(number == 2) {
		document.getElementById('left').remove();
		calendar = document.getElementById('right');
		calendar.setAttribute("style","width:60%;height:80%;opacity:1;margin-top:5%;")
		calendar.innerHTML = '<iframe src="https://calendar.google.com/calendar/selfsched?sstoken=UUJNWW8xZ3pTYUgyfGRlZmF1bHR8ODY3Y2YxYTI4Mjg1NGE4MWIwODUwMGE1NTQwYjlkMzM" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>';
	}
	else if(number == 3) {
		document.getElementById('left').remove();
		calendar = document.getElementById('right');
		calendar.setAttribute("style","width:60%;height:80%;opacity:1;margin-top:5%;")
		calendar.innerHTML = '<iframe src="https://calendar.google.com/calendar/selfsched?sstoken=UUJ0RFY1bS0yN2JMfGRlZmF1bHR8Yjg0OTc3NDg0ODNjZmU0NGFlMzc0MDNjNWM0OGI0NzM" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>';
	}
	else if(number == 4) {
		document.getElementById('left').remove();
		calendar = document.getElementById('right');
		calendar.setAttribute("style","width:60%;height:80%;opacity:1;margin-top:5%;")
		calendar.innerHTML = '<iframe src="https://calendar.google.com/calendar/selfsched?sstoken=UU1Yd0dZQTBieHpkfGRlZmF1bHR8NTZhNTU1NmMzZDM1MmE2Y2ZiN2IzMzE2MTBlYTZiMWQ" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>';
	}
}
