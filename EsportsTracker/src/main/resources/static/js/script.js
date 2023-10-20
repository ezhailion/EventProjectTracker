console.log('script.js loaded');
window.addEventListener('load', function(e) {
	console.log('page loaded');
	init();
})
function init() {

	loadAllTeams();

}

function createForm() {
	let div = document.getElementById('teamListDiv');
	div.textContent = '';
	let form = document.createElement('form');
	form.name = "newTeamForm";
	let teamLabel = document.createElement('label');
	teamLabel.for = 'teamName';
	teamLabel.textContent = "Team Name: ";
	let teamNameInp = document.createElement('input');
	teamNameInp.type = 'text';
	teamNameInp.name = 'teamName'
	teamNameInp.class = 'col-12';
	let disbandDateLabel = document.createElement('label');
	disbandDateLabel.for = 'disbandDate';
	disbandDateLabel.textContent = 'Date Disbanded: ';
	let disbandDateInp = document.createElement('input');
	disbandDateInp.type = 'date';
	disbandDateInp.name = 'disbandDate';
	disbandDateInp.class = 'col-12';
	let br = document.createElement('br');
	div.style = '';

	let matchesPlayed = document.createElement('input');
	let matchesLabel = document.createElement('label');
	matchesLabel.for = 'matchesPlayed';
	matchesLabel.textContent = 'Matches Played: ';
	matchesPlayed.name = 'matchesPlayed';
	matchesPlayed.type = 'number';
	matchesPlayed.appendChild(matchesLabel);
	form.appendChild(matchesPlayed);
	let addTeamButton = document.createElement('button');
	addTeamButton.name = 'addTeamButton';
	addTeamButton.textContent = 'Add New Team';
	addTeamButton.class = 'col-12';
	let cancel = document.createElement('button');
	cancel.name = 'cancel';
	cancel.textContent = 'cancel';
	cancel.class = 'col-12';
	disbandDateInp.appendChild(br);
	teamNameInp.appendChild(br);
	form.appendChild(teamLabel);
	teamLabel.appendChild(teamNameInp);
	form.appendChild(disbandDateLabel)
	disbandDateLabel.appendChild(disbandDateInp);
	form.appendChild(addTeamButton);
	div.appendChild(form);
	form.appendChild(cancel);
	newTeamForm.addTeamButton.addEventListener('click', function(e) {
		e.preventDefault();
		let newTeam = {};
		newTeam.teamName = document.newTeamForm.teamName.value;
		newTeam.disbandedDate = document.newTeamForm.disbandDate.value;
		addTeam(newTeam);
	})
	cancel.addEventListener('click', function(e) {
		e.preventDefault();

		displayAllTeams(loadAllTeams());

	})
}

function displayAllTeams(teamList) {
	let div = document.getElementById("teamListDiv");
	div.textContent = '';
	let table = document.createElement('table');
	let tBody = document.createElement('tbody');
	let tHead = document.createElement('thead');
	let tR = document.createElement('tr');
	let tH1 = document.createElement('th');
	tH1.textContent = 'Team Name';
	let tH2 = document.createElement('th');
	tH2.textContent = 'Disband Date';
	tR.appendChild(tH1);
	tR.appendChild(tH2);
	tHead.appendChild(tR);
	table.appendChild(tHead);
	table.appendChild(tBody);
	div.appendChild(table);
	if (teamList && Array.isArray(teamList) && teamList.length > 0) {
		for (let team of teamList) {
			const row = document.createElement('tr');
			row.teamId = team.id;
			row.addEventListener('click', function(e) {
				let id = team.id;
				updating(id);
				findTeam(id);
			})

			const teamName = document.createElement('td');
			teamName.textContent = team.teamName;
			row.appendChild(teamName);
			const disbandedDate = document.createElement('td');
			disbandedDate.textContent = team.disbandedDate;
			row.appendChild(disbandedDate);



			tBody.appendChild(row);


		}
		table.setAttribute("border", "2");

	}
	let showAvg = document.createElement('button');
	showAvg.name = 'Average Matches Played';
	showAvg.textContent = 'Click to show Average Matches';
	div.appendChild(showAvg);
	showAvg.addEventListener('click', function(e){
		let lab = document.createElement('label');
		lab.for = 'avgHeader';
		lab.textContent = 'Average Matches Played: '
		let h1 = document.createElement('h1');
		h1.name = 'avgHeader';
		h1.textContent = averageTeamMatches(teamList);
		console.log(h1);
		table.appendChild(h1);
	})
	let makeForm = document.createElement('button');
	makeForm.name = 'makeForm';
	makeForm.textContent = 'Show Add Team form';

	div.appendChild(makeForm);
	makeForm.addEventListener('click', function(e) {
		e.preventDefault();
		createForm();

	})

}
function loadAllTeams() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/teams')
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let teams = JSON.parse(xhr.responseText)
				displayAllTeams(teams);
			}
		}
	}

	xhr.send();
}

function updating(teamId) {

	let div = document.getElementById('teamDetailsDiv');
	div.textContent = '';

	let form = document.createElement('form');
	form.name = "updateForm";
	let teamLabel = document.createElement('label');
	teamLabel.for = 'teamName';
	teamLabel.textContent = "Team Name: ";
	let teamNameInp = document.createElement('input');
	teamNameInp.type = 'text';
	teamNameInp.name = 'teamName'

	let idInp = document.createElement('input');
	idInp.type = 'hidden';
	idInp.name = 'id';
	idInp.value = teamId;
	
	let disbandDateLabel = document.createElement('label');
	disbandDateLabel.for = 'disbandedDate';
	disbandDateLabel.textContent = 'Date Disbanded: ';
	
	let disbandDateInp = document.createElement('input');
	disbandDateInp.type = 'date';
	disbandDateInp.name = 'disbandedDate';
	
	let matchesPlayed = document.createElement('input');
	let matchesLabel = document.createElement('label');
	matchesLabel.for = 'matchesPlayed';
	matchesLabel.textContent = 'Matches Played: ';
	matchesPlayed.name = 'matchesPlayed';
	matchesPlayed.type = 'number';
	let updateButton = document.createElement('button');
	updateButton.name = 'updateTeamButton';
	updateButton.textContent = 'Update Team';
	matchesLabel.appendChild(matchesPlayed);
	form.appendChild(matchesPlayed);
	form.appendChild(idInp);
	form.appendChild(updateButton);
	form.appendChild(teamLabel);
	teamLabel.appendChild(teamNameInp);
	form.appendChild(disbandDateLabel)
	disbandDateLabel.appendChild(disbandDateInp);
	div.appendChild(form);
	updateButton.addEventListener('click', function(e) {
		e.preventDefault();
		updateTeam(getFormData(form));
	})

}

function addTeam(newTeam) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/teams');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let newTeamUrl = xhr.getResponseHeader('Location');
				console.log(newTeamUrl);

				let createdTeam = JSON.parse(xhr.responseText);
				displayTeam(createdTeam);
			}
			else {
				displayError("Error creating film: " + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');

	let newTeamJSON = JSON.stringify(newTeam);
	xhr.send(newTeamJSON);
}
function findTeam(teamId) {
	console.log('In findTeam: ' + teamId);

	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/teams/' + teamId);

	xhr.onreadystatechange = function(e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let team = JSON.parse(xhr.responseText);
				displayTeam(team);
			}
			else {
				displayError('Team not found.');

			}
		}
	}
	xhr.send();
}
function displayError(message) {
	let dataDiv = document.getElementById('teamDetailsDiv');
	dataDiv.textContent = '';
	let h2 = document.createElement('h2');
	h2.textContent = message;
	dataDiv.appendChild(h2);
}
function updateTeam(team) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/teams/' + team.id);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function(e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let teamList = JSON.parse(xhr.responseText);

				displayTeam(team);
			}
			else {
				displayError('Team not found.');

			}
		}
	}
	let updateTeamJSON = JSON.stringify(team);
	xhr.send(updateTeamJSON);
}
function deleteTeam(teamId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/teams/' + teamId);
	xhr.onreadystatechange = function(e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {

				displayAllTeams();

			}
			else {
				displayError('Team not found.');

			}
		}
		xhr.send();

	}
}
function getFormData(updateForm) {
	let formData = new FormData(updateForm);
	let updatedData = {};
	formData.forEach(function(value, fieldName) {
		updatedData[fieldName] = value;
	})
	return updatedData;
}
function averageTeamMatches(teamList) {
	if (Array.isArray(teamList) && teamList.length > 0) {
		let matches = 0;
		let counter = 0;
		for (let team of teamList) {
			matches += team.matchesPlayed;
			counter++;

		}
		console.log(matches);
		console.log(counter);
			let avg = matches / counter;
			console.log(avg);
			return avg;
	}
}
function displayTeam(team) {
	let div = document.getElementById('teamListDiv');
	div.textContent = '';

	let h1 = document.createElement('h1');
	h1.textContent = team.teamName;
	div.appendChild(h1);
	let ul = document.createElement('ul');

	let disbDate = document.createElement('li');
	disbDate.textContent = "Date Disbanded: " + team.disbandedDate;
	ul.appendChild(disbDate);

	let matches = document.createElement('li');
	matches.textContent = "Matches Played: " + team.matchesPlayed;
	ul.appendChild(matches);
	div.appendChild(ul);
}