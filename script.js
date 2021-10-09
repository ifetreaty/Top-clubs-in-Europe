const footballClubs = [
    { club: 'Manchester City', stadium: 'Etihad', League: 'England, Premier League' },
    { club: 'Liverpool', stadium: 'Anfield', League: 'England, Premier League' },
    { club: 'Chelsea', stadium: 'Stamford Bridge', League: 'England, Premier League' },
    { club: 'Manchester United', stadium: 'Old Trafford', League: 'England, Premier League' },
    { club: 'Tottenham Hotspur', stadium: 'Tottenham Hotspur', League: 'England, Premier League' },
    { club: 'Arsenal', stadium: 'Emirates', League: 'England, Premier League' },
    { club: 'Real Madrid', stadium: 'Santiago Bernabeu', League: 'Spain, LaLiga' },
    { club: 'Atletico Madrid', stadium: 'Wanda Metropolitano', League: 'Spain, LaLiga' },
    { club: 'Barcelona', stadium: 'Camp Nou', League: 'Spain, LaLiga' },
    { club: 'Sevilla', stadium: 'Ramon Sanchez Pizjuan', League: 'Spain, LaLiga' },
    { club: 'VIllareal', stadium: 'Estadio de la Ceramica', League: 'Spain, LaLiga' },
    { club: 'Real Sociedad', stadium: 'Reale Arena', League: 'Spain, LaLiga' },
    { club: 'Bayern Munich', stadium: 'Allianz Arena', League: 'Germany, Bundesliga' },
    { club: 'RB Leipzig', stadium: 'Red Bull Arena', League: 'Germany, Bundesliga' },
    { club: 'Borussia Dortmund', stadium: 'Signal Iduna Park', League: 'Germany, Bundesliga' },
    { club: 'Bayer 04 Leverkusen', stadium: 'BayArena', League: 'Germany, Bundesliga' },
    { club: 'Juventus', stadium: 'Allianz Stadium', League: 'Italy, Serie A' },
    { club: 'Napoli', stadium: 'Stadio Diego Armando Maradona', League: 'Italy, Serie A' },
    { club: 'Roma', stadium: 'Stadio Olimpico', League: 'Italy, Serie A' },
    { club: 'Inter', stadium: 'San Siro', League: 'Italy, Serie A' },
    { club: 'Milan', stadium: 'San Siro', League: 'Italy, Serie A' },
    { club: 'Paris Saint-Germain', stadium: 'Parc des Princes', League: 'France, Ligue 1' },
    { club: 'AS Monaco', stadium: 'Stade Louis II', League: 'France, Ligue 1' },
    { club: 'Olympique Lyonnais', stadium: 'Groupama', League: 'France, Ligue 1' },
    { club: 'Olympique de Marseille', stadium: 'Orange Velodrome', League: 'France, Ligue 1' },
    { club: 'Lille OSC', stadium: 'Stade Pierre Mauroy', League: 'France, Ligue 1' },
    { club: 'PSV Eindhoven', stadium: 'Philips Stadion', League: 'Netherlands, Eredivisie' },
    { club: 'Ajax', stadium: 'Johan Cruijff Arena', League: 'Netherlands, Eredivisie' },
    { club: 'SL Benfica', stadium: 'Estadio do Sport Lisboa', League: 'Portugal, Primeira Liga' },
    { club: 'FC Porto', stadium: 'Estadio do Dragao', League: 'Portugal, Primeira Liga' }
  ];


function findMatches(wordToMatch, club) {
    return club.filter(league => {
        const regex = new RegExp(wordToMatch, 'gi');
        return league.club.match(regex) || league.stadium.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayMatches() {
  const matchArray = findMatches(this.value, footballClubs);
  const html = matchArray.map(league => {
    const regex = new RegExp(this.value, 'gi');
    const clubName = league.club.replace(regex, `<span class="hl">${this.value}</span>`);
    const stadiumName = league.stadium.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${clubName}, ${stadiumName}</span>
        <span class="league">${numberWithCommas(league.League)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);