/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];


/*
	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle - 
					0 - hide the html tag
					1 - make the html tag visible
			
			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.  
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.  
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/
function viewStudentStats(id, toggle){
	//var number = document.getElementById(id).innerHTML;//retrieve the current number

	if (toggle == 1){
		document.getElementById(id).style.visibility = "visible";
		document.getElementById(id).style.height = "auto";
	}
	else{
		document.getElementById(id).style.visibility = "hidden";
		document.getElementById(id).style.height = "0";

	}

	

}
				
/*
	Home Page: 
		changeColor(color) method
			parameter: 
				color- A css color
				
			purpose: This method will set the html body's background color to the 
					 provided parameter.
*/
function changeColor(color){
	document.body.style.background = color;

}


/*
	Football Season Stats Page:
		loadStatsPage method:
			parameters: none
			
			purpose: This method will iterate through the stats table and 
					 do the following:
						1. Read through each row of the table & determine which team won
						   the game.
						
						2. Update the winner column to the name of the winning team.
						
						3. Keep track of the number of wins/losses for the Buffs.
						
						4. Update the second table to show the total number of wins/losses for the Buffs.
*/
function loadStatsPage(){
	var table = document.getElementById("stats_table");
	var row_counter;
	var col_counter;
	var cell_value;
	var prevCell;
	var temp;
	var wins = 0;
	var losses = 0;

	for(row_counter = 2; row_counter < table.rows.length; row_counter++){
		
		temp = true;
		for(col_counter = 0; col_counter < table.rows[row_counter].cells.length; col_counter++){

			if(col_counter == table.rows[row_counter].cells.length-4){
				oppon = table.rows[row_counter].cells[col_counter].innerHTML;
			}
			
			else if(col_counter == table.rows[row_counter].cells.length-3){
				prevCell = table.rows[row_counter].cells[col_counter].innerHTML;
			}

			//Read in a cells current value
			else if(col_counter == table.rows[row_counter].cells.length-2){
				cell_value = table.rows[row_counter].cells[col_counter].innerHTML;
				if (parseInt(cell_value) > parseInt(prevCell)){
					temp = 0;
				
				}
				else{ 
					temp = 1;
				}
					
					
			}
			else if (col_counter == table.rows[row_counter].cells.length-1){
				if(temp == 1){
					cell_final = "CuBoulder";
					table.rows[row_counter].cells[col_counter].innerHTML = cell_final;
					wins++;
				}
				else{
					cell_final = oppon;
					table.rows[row_counter].cells[col_counter].innerHTML = cell_final;
					losses++;
				}
			}

		}

	}
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;	

}

/*
	Football Player Information Page
		loadPlayersPage method:
			parameters: none
			
			purpose: This method will populate the dropdown menu to allow the 
					 user to select which player's information to view.
					 
					 To handle this, you will need to iterate through the players array
					 and do the following for each player:
						1. Create an anchor tag
						2. Set the href to "#", this will make sure the 
							anchor tag doesn't change pages
						3. Set the onclick to call switchPlayers method 
							(this will need to pass in the index inside the players array)
						4. Set the anchor tag's text to the player's name.
						
					After setting all of the anchor tags, update the innerHTML of the dropdown menu.
					As a note, the id for the dropdown menu is player_selector.
*/
function loadPlayersPage(){
	var select = document.getElementById("player_selector");
	var options = [" David Pierce, ", " Michael Johnson, ", " Scott Davis "];
	var objects = ['a', 'b', 'c'];
	
	for(var i = 0; i<options.length; i++){
		var object = document.createElement(objects[i]);
		var link = document.createTextNode(options[i]);
		object.appendChild(link);
		object.title = "test";
		object.href = "#";
		if (i==0){
			object.onclick = function(){switchPlayers(0);};
		}
		if (i==1){
			object.onclick = function(){switchPlayers(1);};
		}
		if (i==2){
			object.onclick = function(){switchPlayers(2);};
		}
		
		select.appendChild(object).innerHTML;
			
	}	

}


function switchPlayers(playerNum){
	player = [{player_year: 'Junior', player_major:'Engineering', games_played: 14, 
			  passing_yards: 17, running_yards: 212, reception_yards: 442},

			{player_year: 'Senior', player_major:'Communications', games_played: 11,
			 passing_yards: 127, running_yards: 312, reception_yards: 122},

			{player_year: 'Freshman', player_major:'Political Science', games_played: 5,
			passing_yards: 157, running_yards: 112, reception_yards: 108}];

	document.getElementById('p_year').innerHTML = player[playerNum].player_year;
	document.getElementById('p_major').innerHTML = player[playerNum].player_major;
	document.getElementById('g_played').innerHTML = player[playerNum].games_played;

	document.getElementById('p_yards').innerHTML = player[playerNum].passing_yards;
	document.getElementById('avg_p_yards').innerHTML = player[playerNum].passing_yards/player[playerNum].games_played;

	document.getElementById('r_yards').innerHTML = player[playerNum].running_yards;
	document.getElementById('avg_r_yards').innerHTML = player[playerNum].running_yards/player[playerNum].games_played;

	document.getElementById('rec_yards').innerHTML = player[playerNum].reception_yards;
	document.getElementById('avg_rec_yards').innerHTML = player[playerNum].reception_yards/player[playerNum].games_played;
	playerNum++;
	if(playerNum >= player.length)//If we've gone too far, reset the index to 0.
	{
			playerNum = 0;
	}	

}
/*
function switchPlayers(playerNum){

	

}

/*
		
		switchPlayers(playerNum) method:
			parameters: 
				playerNum - The index of the football player in the players array.
			
			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.
				
				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards
					
					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/








				

