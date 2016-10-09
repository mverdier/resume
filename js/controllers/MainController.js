app.controller('MainController', ['$scope', '$http', function($scope, $http) {

	$scope.locale = "frFR"; //This is the language. Use these: enUS frFR

	$scope.person = {
		"name": "Martin Verdier", //That's your name!
		"birthdate": new Date(1994, 11, 27), //Here is your birthdate
		"role": "Backend software developer", //The role you're probably looking for
		"phone": "+33624726458", //Your phone (This is the version that's going to be called, put it in a single block!)
		"phoneDisplay": "(+33) 6 24 72 64 58", //Your phone for the display, the one that a human can easily read!
		"email": "mart.verdier@gmail.com", //Your email
		"picture": "resources/profile.png", //The relative path to your picture in the project's folder (relative to resume.html)
		"github": "https://github.com/mverdier" //Your GitHub, is you have one
	};

	$scope.school = [{
		"title": "Baccalauréat Scientifique (Engineer Science Option), mention AB",
		"dates": "2012-2014",
		"location": "Antoine Bourdelle High School, Montauban, France"
	},
	{
		"title": "DUT in Computer Science (2-year diploma)",
		"dates": "2012-2014",
		"location": "Rodez IUT, France"
	},
	{
		"title": "APSIO Professional Bachelor",
		"dates": "2012-2014",
		"location": "Blagnac IUT, France"
	}]

	$scope.work = [{
		"contract": "Ten-week internship",
		"dates": "2014",
		"role": "Full-stack web and Android developer",
		"company": "Visual-2000",
		"location": "Montréal, Canada",
		"techs": "HTML5, CSS3, JS, PHP, SQL, Android",
		"url": "http://qeepr.com/",
		"displayUrl": "www.qeepr.com",
		"tasks": "Entirely remade signup, login, and genealogy tree pages\nAdded picture uploading feature to the signup page\nAdded a QR code selling feature <i>via</i> the website\nUpdated and developed several features\nDeveloped an Android application using geolocation, QR code scanning, and website data access features"
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
		"tasks": "Updated software features\nDeveloped an artificial intelligence and machine learning engine\nMaintained and adapted pre-existing features\nUpdated the dynamic web dashboards\nUpdated the MongoDB database\nWorked with a Python developer for intelligence metrics"
	},
	{
		"contract": "Permanent contract",
		"dates": "2015 - Current",
		"role": "Lead Java developer",
		"company": "Telegrafik",
		"location": "Toulouse, France",
		"techs": "Java, MongoDB, AngularJS, HTML5, CSS3, Python",
		"url": "http://www.telegrafik.eu/",
		"displayUrl": "www.telegrafik.eu",
		"tasks": "Following the tasks done during the apprenticeship contract\nWork distribution to other developers\nSupervision and validation of other developers' work\nManaging software deployment process, branch merging, production pushes"
	}]
}]);