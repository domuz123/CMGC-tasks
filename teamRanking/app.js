const matches = [
    {
        homeTeam: 'France',
        awayTeam: 'Croatia',
        score: '2:1',
        date: '18.01.2019'
    },
      {
        homeTeam: 'England',
        awayTeam: 'Spain',
        score: '3:1',
        date: '18.01.2019'
    },
    {
        homeTeam: 'Spain',
        awayTeam: 'Croatia',
        score: '0:0',
        date: '12.01.2019'
    },
    {
        homeTeam: 'France',
        awayTeam: 'England',
        score: '0:1',
        date: '12.01.2019'
    },
    {
        homeTeam: 'England',
        awayTeam: 'Croatia',
        score: null,
        date: '03.02.2019'
    },
    {
        homeTeam: 'Spain',
        awayTeam: 'France',
        score: null,
        date: '03.02.2019'
    }
];

const getRankings = (games) => { 
    // ... your implementation
    let ranking = [];

    // find team
    let findTeamInRanking = (team) => ranking.find(rank => rank.name === team);

    // update team points
    let updateTeamPoints = (team, points) => {
        let item = findTeamInRanking(team);
        item.points += points;
    };

    // create inital ranking for team
    let createTeamForRanking = (name, points) => ranking.push({name, points});

    // create table
    let addPointsTo = (team, points) => {
        let item = findTeamInRanking(team);

        if(!item){
            // first time adding team
            createTeamForRanking(team, points); 
        }  else {
            // update team points
            updateTeamPoints(team, points)   
        }
    }

    // sorting ranking by points then by alphabet
    sortRanking = () => ranking.sort(function (a, b) {
        return b.points - a.points || a.name.localeCompare(b.name);
    });

    let getWinnerIn = (game) => {
        // while we are looping put team in ranking 

        if(game.score !== null){
            let score = game.score.split(':').map(result => parseInt(result));
            
            if(score[0] > score[1]){
                addPointsTo(game.homeTeam, 3)
            } else if(score[1] > score[0]){
                addPointsTo(game.awayTeam, 3)
            } else {
                addPointsTo(game.homeTeam, 1);
                addPointsTo(game.awayTeam, 1);
            }
        }
    };

    games.forEach(game => getWinnerIn(game));

    sortRanking();

    return ranking;
} 

const footbalRankings = getRankings(matches);
console.log(footbalRankings);