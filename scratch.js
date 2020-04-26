function getWinners( getFinals ) {

    console.log("in getWinners"); //START HERE++++++++++++++++++++++++++++++++++++++++++++++++++

    let finalsArray = getFinals(fifaData);

    //let goalsArray = finalsArray.filter( (item) => { }
        
        //return item["Home Team Goals"] > item["Away Team Goals"] ? item["Home Team Goals"] : item["Away Team Goals"] }

        // if( item["Home Team Goals"] > item["Away Team Goals"] ){
        //     console.log( item["Home Team Name"]);
        //     return item["Home Team Name"];

        // }if( item["Home Team Goals"] > item["Away Team Goals"] ){
        //     console.log( item["Away Team Name"]);
        //     return item["Away Team Name"];
        // }
    //);
    //console.log(goalsArray);
    //let winners = goalsArray.map( (item) => { return item.});

};
getWinners(getFinals);


function getWinners( getFinals ) {

    console.log("in getWinners"); //START HERE++++++++++++++++++++++++++++++++++++++++++++++++++

    let finalsArray = getFinals(fifaData);

    let winners = finalsArray
        .filter( item => item["Home Team Goals"] > item["Away Team Goals"] )
        .map( (item) => { return item["Home Team Name"] } )

         //winners = finalsArray
        .filter( item => item["Away Team Goals"] > item["Home Team Goals"] )
        .map( (item) => { return item["Away Team Name"] } );

    console.log(winners);
};