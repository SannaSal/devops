let songs = [ "Maailma on sun", "Pakko päästä pois", "Kaukaisimmalle rannalle", "Totuutta ja tehtävää",
"Viimeinen elämä", "Hiuksissa hiekkaa"];

let random = songs[Math.floor(Math.random() * songs.length)];

console.log(random);