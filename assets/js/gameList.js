const gamesTable = document.querySelector('#gamesTable');
const gamesArray = ['5 Second rule', 'Absurd words', 'Apples to Apples', 'Articulate Life!', 'Articulate mini game', 'Articulate!', 'Backbacker', 'Bang! The dice game', 'Battle of the Sexes', 'Battleship', 'Beach dobble', 'Blankr', 'Blink', 'Brain builders', 'Buckaroo!', 'Bucket of doom', 'Buzzed out', 'Cabo', 'Camel up', 'Carcassone', 'Cards against humanity', 'Cash`n Guns', 'Catan', 'Catan extension 5-6 player', 'Chain reaction', 'Chairs', 'Charades', 'Chess', 'Chicken Charades', 'Cluedo', 'Codenames', 'Colour brain', 'Concept', 'Coup', 'Cranium', 'Cranium Junior', 'Crazy bugs', 'Describe it', 'Dino dump', 'Diplomacy', 'Dixit', 'Djenga', 'Dobble', 'Dobble', 'Doh nutters', 'Domino', 'Drinking Games Pack', 'Exploding kittens adult version', 'Exploding kittens original', 'Eyetoons', 'Fact or crap', 'Family fortune', 'Festive quiz', 'Finger twister', 'First Dates', 'Flashrevise cards', 'Flummoxed', 'Fluxx', 'Food & drink quiz', 'Forbidden Island', 'Four in a row', 'Frenzie', 'Funemployed', 'Geistes blitz', 'Geistes blitz 2.0', 'Great games charades', 'Guiness world trivia challenge', 'Haikubes', 'Hangman', 'Hearing things', 'Hive', 'I.Q. brain train', 'I`am with Stupid', 'Identity Crisis', 'Imploding kittens', 'Jaipur', 'Jenga earthquake', 'Kalaha', 'Keep on humming', 'Kerplunk', 'Kids v. adults', 'Know your partner', 'Labyrinth', 'Latice', 'Lifeboat', 'Loads of trivia', 'Logic links', 'Love letter', 'Maffia de Cuba', 'Magic Maze', 'Magic fairy-tale dice', 'Mah jong', 'Mancala', 'Mapominoes', 'Mastermind', 'Maze ball', 'Mini games', 'Monopoly', 'Monopoly Bristol edition', 'Monopoly ultimate banking', 'Monster Surgery', 'Mr Lister`s quiz shoutout', 'Munchkin Deluxe', 'Music quiz', 'Music snap', 'Music trivia cards', 'Mysterium', 'OK', 'Obama Llama', 'Obama Llama2', 'Odin`s ravens', 'One minute challenge', 'One night alien', 'Operation', 'Otello', 'Percussion sest', 'Perfect Partners', 'Pick up stick', 'Pictionary', 'Picture this', 'Pictureka', 'Pinch and Pass', 'Pinhead', 'Play Planks- Natural', 'Qwirkle', 'Railrace', 'Rainbow rage', 'Randomize', 'Rhino hero', 'Saboteur', 'Santa banter', 'Scotland Yard', 'Scrable', 'Scrawl', 'Scrawl', 'Senior moments', 'Senior moments unior', 'Shout!', 'Show or tell', 'Snap', 'Space team ', 'Splendor', 'Sport quiz', 'Story cube', 'Stuccups', 'Taboo', 'Takenoko', 'The BEST of BRISTISH', 'The Chameleon', 'The big movie night', 'The emoji game', 'The memory game', 'The mind', 'The noodle game', 'The sport quiz', 'Thieves', 'Think words!', 'Thinkabout', 'Thruth bombs', 'Ticket to Ride', 'Tornado', 'Trivial Pursuit', 'Trivial Pursuit bite', 'Trivial Pursuit dinosaurus bite', 'Tumble', 'Twin it!', 'Twister', 'Two rooms and a BOOM', 'Unlock!', 'Uno', 'Unstable unicorn', 'Up a bit', 'Urban myth.', 'Visionary', 'Warning puzzle 1', 'Warning puzzle 2', 'Weird things humans search for', 'Which one?', 'Who knows where?', 'Who`s who', 'Wordly wise', 'Would I lie to you?', 'Yes! No!', 'iMAgiNiff…', 'one night werewolf', 'quirky stuff', 'quirky trivia', 'qwordie'];

function listGames() {
  for(var i = 0; i < gamesArray.length; i++) {
    gamesTable.innerHTML += '<tr><td>' + gamesArray[i] + '</td></tr>'
  }
};

listGames();

function searchGames() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("userInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("gamesTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
  }
}