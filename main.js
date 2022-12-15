let gameList = [];

//fetch data from RapidAPI and display it 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1102e9913msh882d93f50cdf643p1d39c7jsnef03643947f5',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
	}
};

fetch('https://opencritic-api.p.rapidapi.com/game/hall-of-fame/2022', options)
	.then(response => response.json())
	.then(data => {
        data.map((values) => {
           gameList += `<div class="game-container">

            <div class="game-poster">
                <img id="poster" src="/assets/imgs/yes.png" alt="">
            </div>
    
            <div class="game-info">
                <h1 id="title">Title: ${values.name} </h1>
                <h1 class="rel-date">Release Date: ${values.firstReleaseDate}</h1>
                <h1 class="tier">Tier: ${values.tier} </h1>
                <br>
                <h1 class="oc-score">OpenCritic Score: ${values.topCriticScore} </h1>
            </div>
        </div>`;
    });

        document.getElementById("games").innerHTML=gameList;
    })
	.catch(err => console.error(err));

