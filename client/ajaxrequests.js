//Get all articles from the server
function getArticles() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', encodeURI('api/allarticles'));
	xhr.onload = function() {
		if (xhr.status === 200) {
			var articles = JSON.parse(xhr.responseText);
			
			displayArticles(articles);
		} else {
			alert('Request failed.  Returned status of ' + xhr.status);
		}
	};
	xhr.send();
}

