app.controller('MainController', ['$scope', '$http', function($scope, $http) {

	$scope.locale = "enUS"; //This is the language. Use these: enUS frFR

	$scope.person = {
		"name": "Martin Verdier", //That's your name!
		"birthdate": new Date(1994, 11, 27), //Here is your birthdate
		"role": "Backend software developer", //The role you're probably looking for
		"phone": "0033624726458", //Your phone (This is the version that's going to be called, put it in a single block!)
		"phoneDisplay": "(+33) 6 24 72 64 58", //Your phone for the display, the one that a human can easily read!
		"email": "mart.verdier@gmail.com", //Your email
		"picture": "resources/profile.png", //The relative path to your picture in the project's folder (relative to resume.html)
		"github": "mverdier" //Your GitHub link, if you have one
	};

	/*
	This is your school data. In there you'll put the several degrees you've earned,
	as well as your certifications or stuff like that.
	
	The format is pretty straight-forward, each element has a title, dates, and a location:
	{
		"title": "Your degree, like Bachelor Degree in Computer Science",
		"dates": "The dates between which you workd on that degree, like 2010-2013",
		"location": "Which establishment gave it to you, for example Massachusetts Institute of Technology, Boston, MA"
	}
	
	That's it. You can fill those and put as many as you like.
	*/
	$scope.school = [{
		"title": "APSIO Professional Bachelor",
		"dates": "2012-2014",
		"location": "Blagnac IUT, France"
	},
	{
		"title": "DUT in Computer Science (2-year diploma)",
		"dates": "2012-2014",
		"location": "Rodez IUT, France"
	},
	{
		"title": "Baccalauréat Scientifique (Engineer Science Option), mention AB",
		"dates": "2012-2014",
		"location": "Antoine Bourdelle High School, Montauban, France"
	}]

	/*
	This is a tad more complete than the school part.
	Basically in there you'll put every work experience you've had.
	Each of them will have information available as such:
	
	{
		"contract": "Type of contract, like an Internship",
		"dates": "Same as for school, the dates between which you've worked under this contract, like 2012-2013",
		"role": "Your role in the company during this contract, Web Developer for example",
		"company": "The company you worked in, might be Microsoft",
		"location": "Where you worked, as in a city, state format, for example in Denver, CO",
		"techs": "Which techs you used. This is a bit developer-specific and might not apply to you, don't bother putting it if you don't feel like it helps. Otherwise, for example PHP, HTML5, CSS3",
		"url": "The website of the company you worked in, or of the project you worked on. http://microsoft.com/",
		"displayUrl": "A nice, clean version of the website URL, easily readable by humans, like microsoft.com",
		"tasks": [{
			"content": "Content of the task you worked on"
		},
		{
			"content": "Content of another task"
		}]
	}	*/
	$scope.work = [{
		"contract": "Permanent contract",
		"dates": "2015 - Current",
		"role": "Lead Java developer",
		"company": "Telegrafik",
		"location": "Toulouse, France",
		"techs": "Java, MongoDB, AngularJS, HTML5, CSS3, Python",
		"url": "http://www.telegrafik.eu/",
		"displayUrl": "www.telegrafik.eu",
		"tasks": [{
			"content": "Improving the software by developing new features"
		},
		{
			"content": "Created a rule engine allowing helpers to set personal alarms according to their close one's behavior"
		},
		{
			"content": "Tons of bug fixing and software optimization"
		}
		{
			"content": "Work distribution to other developers"
		},
		{
			"content": "Supervision and validation of other developers' work"
		},
		{
			"content": "Managing software deployment process, branch merging, production pushes"
		},
		{
			"content": "Managing the evolutions and optimizations of the database"
		}]
	},
	{
		"contract": "One-year Apprenticeship",
		"dates": "2014 - 2015",
		"role": "Software developer",
		"company": "Telegrafik",
		"location": "Toulouse, France",
		"techs": "Java, MongoDB, AngularJS, HTML5, CSS3",
		"url": "http://www.telegrafik.eu/",
		"displayUrl": "www.telegrafik.eu",
		"tasks": [{
			"content": "Updated software features"
		},
		{
			"content": "Developed an artificial intelligence and machine learning engine"
		},
		{
			"content": "Maintained and adapted pre-existing features"
		},
		{
			"content": "Updated the dynamic web dashboards"
		},
		{
			"content": "Updated the MongoDB database"
		},
		{
			"content": "Worked with a Python developer for intelligence metrics"
		}]
	
	},
	{
		"contract": "Ten-week internship",
		"dates": "2014",
		"role": "Full-stack web and Android developer",
		"company": "Visual-2000",
		"location": "Montréal, Canada",
		"techs": "HTML5, CSS3, JS, PHP, SQL, Android",
		"url": "http://qeepr.com/",
		"displayUrl": "www.qeepr.com",
		"tasks": [{
			"content": "Entirely remade signup, login, and genealogy tree pages"
		},
		{
			"content": "Added picture uploading feature to the signup page"
		},
		{
			"content": "Added a QR code selling feature in the website"
		},
		{
			"content": "Updated and developed several features"
		},
		{
			"content": "Developed an Android application using geolocation, QR code scanning, and website data access features"
		}]
	}]

	/*
	Skills are a complex yet simple type of data here
	What you want to do is separate your skills in categories (Web development, Microsoft Suite, Personal skills, ...)
	and fill it as such. Here is the format:
	
	{
		"category": "The category of skills, such as Web Development",
		"more": [{ 
			"name": "A skill you're good at, like PHP"
		},
		{
			"name": "Another skill you're good at, like HTML5"
		}],
		"less": [{
			"name": "A skill you know but you haven't yet practiced enough"
		}]
	}
	
	You can put in as many categories as you like, with as many skills as you like.
	Be crative, that's the important stuff!
	*/
	$scope.skills = [{
		"category": "Object-Oriented Programming",
		"more": [{
			"name": "Java"
		},
		{
			"name": "PHP"
		},
		{
			"name": "C#"
		},
		],
		"less": [{
			"name": "C++"
		},
		{
			"name": "Ruby"
		}]
		
	},
	{
		"category": "Web Development",
		"more": [{
			"name": "HTML5"
		},
		{
			"name": "CSS3"
		},
		{
			"name": "JavaScript"
		}],
		"less": [{
			"name": "AngularJS"
		},
		{
			"name": "Node.JS"
		},
		{
			"name": "Ruby on Rails"
		}]
	},
	{
		"category": "Databases",
		"more": [{
			"name": "MongoDB"
		},
		{
			"name": "SQL"
		}],
		"less": [{
			"name": "MariaDB"
		}]
	},
	{
		"category": "Systems",
		"less": [{
			"name": "Linux"
		}],
		"more": [{
			"name": "Bash"
		}]
	}];

	/*
	This is one of the two "misc" parts!
	This thing right here is about *you*. Not what you can do, not what you know, who you are. What you like!
	Basically if you're into say, hockey, you can put that here. Drawing? Yeah, sure, go ahead!
	Keep in mind that you might get questions about this stuff because it can be considered things you /really/ like.
	So, dont just put "movies" if you watch one every month or so, except if it's really out of real interest in specific movies!
	
	Well I'm not your mother, do what you want here. Just do it like so:
	{
		"title": "Your interest"
	}
	
	Here too, put in as many as you want. If I were to say, I would advise about 5 should be a ceiling.
	But again, I'm not your mother.
	*/
	$scope.likes = [{
		"title": "Traveling"
	},
	{
		"title": "Cartography"
	},
	{
		"title": "Photography"
	}];

	/*
	The second misc part!
	This is the classic "which languages can I speak, and how good?" part of a resume.
	
	The format comes in its classic way as well:
	{
		"name": "The language you know, like Spanish",
		"level": "How well you master it, like School Level or Native or Bilingual or Professional. This is not exhaustive."
	}
	
	Here again, put as many as you like. Depending on your job you might want 2 or 10 of those.
	*/
	$scope.languages = [{
		"name": "French",
		"level": "Native"
	},
	{
		"name": "English",
		"level": "Bilingual"
	}];
}]);
