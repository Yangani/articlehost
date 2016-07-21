//Get all articles from the server
function getArticles() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', encodeURI('api/allarticles'));
	xhr.onload = function() {
		if (xhr.status === 200) {
			displayArticles(JSON.parse(xhr.responseText));
		} else {
			alert('Request failed.  Returned status of ' + xhr.status);
		}
	};
	xhr.send();
}

getArticles();

//Display Articles list
function displayArticles(articles) {
	articles.forEach(function(article) {
		renderArticlesTemplate(article.title, article.body);
	})
}

//Render Individual article Template
function renderArticlesTemplate(title, body) {
	var deleteButton = '<button type="button" class="delete" id="delete" value="' + title + '"onclick="deleteArticle(this.value)">Delete</button>';

	var renderdiv = document.getElementById("articlelist");
	renderdiv.innerHTML = renderdiv.innerHTML + '<div class="article" id="' + title + '"><h3 class="title">' + title + '</h3><p class="paragraph-body">' + body + '</p>' + deleteButton + '</div></div>';
}

//Add new article to the DB
function addArticle() {
	var title   = document.getElementById("title").value;
	var body = document.getElementById("body").value;

	//Check if user entered a title
	if(!title) {
		alert("Please enter a title");
		return;
	}

	//Check if user entered a body
	if(!body) {
		alert("Please enter a body");
		return;
	}

	//article data to send to server
	var data = {
		"title": title,
		"body": body
	}

	xhr = new XMLHttpRequest();
	xhr.open('POST', encodeURI('api/addarticle'));
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = function() {
		if (xhr.status === 200) {
			if(xhr.responseText === "Successful") {
				renderArticlesTemplate(title, body);
				console.log("Successful added article");
			} else {
				alert("article Already Exists")
			}
			//Clear Text area
			document.getElementById("title").value= "";
			document.getElementById("body").value= "";
		} else if (xhr.status !== 200) {
			alert('Request failed ' + xhr.status);
		}
	};
	xhr.send(JSON.stringify(data));
}


//Delete Article
function deleteArticle(title) {
	//Delete the article
	document.getElementById(title).remove();
	//Remove Aricle from the database
	xhr = new XMLHttpRequest();
	xhr.open('DELETE', encodeURI('api/deletearticle'));
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log("Delete Successful");
		} else if (xhr.status !== 200) {
			alert('Request failed ' + xhr.status);
		}
	};
	xhr.send(JSON.stringify(title));
}

function editArticle(title) {
	
	//Edit article from the database
	xhr = new XMLHttpRequest();
	xhr.open('PUT', encodeURI('api/editarticle'));
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log("Edit Successful");
		} else if (xhr.status !== 200) {
			alert('Request failed ' + xhr.status);
		}
	};
	xhr.send(JSON.stringify(title));
}
