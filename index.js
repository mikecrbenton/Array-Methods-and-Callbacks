import { fifaData } from './fifa.js';
//console.log(fifaData);


// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

// (a) Home Team name for 2014 world cup final
//--------------------------------------------

function getTeamInfo ( jsonObject , teamString ){

    let name = jsonObject.filter( eachObject => eachObject.Year === 2014 && eachObject.Stage === "Final" )
    .map( item =>  item[teamString] );

    console.log(name);
}
 getTeamInfo(fifaData, "Home Team Name");


// (b) Away Team name for 2014 world cup final
//--------------------------------------------
getTeamInfo(fifaData, "Away Team Name");


// (c) Home Team goals for 2014 world cup final
//---------------------------------------------
getTeamInfo(fifaData, "Home Team Goals");


// (d) Away Team goals for 2014 world cup final
//---------------------------------------------
getTeamInfo(fifaData, "Away Team Goals");


// (e) Winner of 2014 world cup final 
//-----------------------------------
function getWinner( jsonObject ) {

    let winner = jsonObject.filter( eachObject => eachObject.Year === 2014 && eachObject.Stage === "Final" );

    if( winner[0]["Home Team Goals"] > winner[0]["Away Team Goals"] ){
        
        console.log("The Winner is " + winner[0]["Home Team Name"]);
    }
    if( winner[0]["Home Team Goals"] < winner[0]["Away Team Goals"] ){
        
        console.log("The Winner is " + winner[0]["Away Team Name"]);
    }

};
getWinner( fifaData );


//============================================================================
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of 
objects with only finals data */
//============================================================================

function getFinals( data ) {

    const finalsArray = data.filter( item => item.Stage === "Final" );
    //console.log(finalsArray);
    return finalsArray;
};
//getFinals(fifaData);


//============================================================================
/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback \
function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
//============================================================================

function getYears( getFinals ) {

    let years = getFinals(fifaData);
    years = years.map( (item)=>{ return item.Year });

    //console.log(years);
    return years;
};
//getYears(getFinals);


//============================================================================
/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback 
function `getFinals()` and determine the winner (home or away) of each `finals` game. 
Return the name of all winning countries in an array called `winners` */ 
//============================================================================

function getWinners( getFinals ) {

    let finalsArray = getFinals(fifaData);

    //GET HOME TEAMS
    let winnersPt_1 = finalsArray
        .filter( item => item["Home Team Goals"] > item["Away Team Goals"] )
        .map( (item) => { return item["Home Team Name"] } );

    //GET AWAY TEAMS ( SEPARATE ARRAY - NOT SURE HOW TO DO THIS IN ONE SHOT??)
    let winnersPt_2 = finalsArray
        .filter( item => item["Away Team Goals"] >= item["Home Team Goals"] )
        .map( (item) => { return item["Away Team Name"] } );

    //CONCAT THE TWO ARRAYS ( THE SECOND ONE CONTAINS THE TIES = )
    let winners = winnersPt_1.concat(winnersPt_2);

    //console.log(winners);
    return winners;
};
//getWinners(getFinals);

//============================================================================
/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following 
parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
//============================================================================
//ARE THE STRINGS SUPPOSED TO BE RETURNED IN AN ARRAY
//HOW IS THE WINNERS ARRAY ( WHICH JUST HOLDS THE NAMES OF TEAMS, AND THE YEARS ARRAY WHICH
// JUST HOLDS THE YEAR CONNECTED ?)

function getWinnersByYear( getWinners, getYears ) {

    //let stringArray = 

};

getWinnersByYear();


//============================================================================
/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` 
and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */
//============================================================================
// HOW DO YOU CONNECT THE TEAM INITIALS TO WINNING TEAM

function getCountryWins( data, teamInitials ) {

    let finalsArray = getFinals(fifaData);


};

getCountryWins( getFinals, "FRA" );

//============================================================================
/* Task 9: Write a function called `getAverageGoals` that accepts a parameter `data` and returns 
the the average number of home team goals and away team goals scored per match 
(Hint: use .reduce and do this in 2 steps) */
//============================================================================

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();



/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
