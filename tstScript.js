
// Card names & search values
var names = [
    'Jay-Z',
    'Diddy',
    'Dr. Dre',
    'Russell Simmons',
    'Kanye West',
    'Master P',
    'Eminem',
    'Usher',
    'Ronald Slim Williams',
    'Ice Cube',
    'Lil Wayne',
    'Pharrell Williams',
    'Snoop Dogg',
    'Drake',
    'Nicki Minaj',
    'Timbaland',
    'Akon'
];
var values = [
    '930,500,000',
    '855,000,000',
    '820,000,000',
    '340,200,000',
    '250,000,000',
    '249,000,000',
    '210,000,000',
    '180,000,000',
    '170,000,000',
    '160,500,000',
    '150,000,000',
    '150,000,000',
    '135,000,000',
    '120,000,000',
    '85,000,000',
    '84,000,000',
    '80,000,000'
];
var desc = [
    'In 1960, slavery was over.',
    'Sharks have a lot of teeth!',
    'Another cool fun fact!',
    'Another cool fun fact!',
    'Another cool fun fact!',
    'Another cool fun fact!',
    'Another cool fun fact!',
    'Another cool fun fact!',
    'Another cool fun fact!',
    'Another cool fun fact!',
    'Another cool fun fact!',
    'Another cool fun fact!'
];
        
// Already chosen cards & temporary card variables
var beginLength = 0;
var chosen = [];
var card1;
var card2;        
        
        
// Start game on page load
function start() {
    // Generate first card value
    generateCard1();
            
    // Create event listeners for Higher, Lower, & Next buttons
    var card1 = document.getElementById('higher');
    var card2 = document.getElementById('lower');
    var nextC = document.getElementById('nextC');
    var nextF = document.getElementById('nextF');
    card1.addEventListener('click',higher,false);
    card2.addEventListener('click',lower,false);
    nextC.addEventListener('click',nextStackC,false);
    nextF.addEventListener('click',nextStackF,false);
            
}
        
//-------------------------------------------------------------------------//
//                      Next buttons & generate new cards
//-------------------------------------------------------------------------//
function nextStackC() {
    if(chosen.length >= (names.length)) {
        document.getElementById('circle').style.display = 'none';
        document.getElementById('congrats').style.display = 'none';
        document.getElementById('noCards').style.display = 'flex';
    }
    else {
        document.getElementById('congrats').style.display = 'none';
        document.getElementById('circle').style.display = 'flex';
        displayCards();
    }
}
        
function nextStackF() {
    if(chosen.length >= (names.length)) {
        document.getElementById('circle').style.display = 'none';
        document.getElementById('fail').style.display = 'none';
        document.getElementById('noCards').style.display = 'flex';
    }
    else {
        document.getElementById('fail').style.display = 'none';
        document.getElementById('circle').style.display = 'flex';
        displayCards();
    }
}
//-------------------------------------------------------------------------//
//   Move on to next card, display congrats or fail screen, prepare next cards
//-------------------------------------------------------------------------//
function higher() {
    var int1 = parseInt(values[card1].replace(/,/g, ''));
    var int2 = parseInt(values[card2].replace(/,/g, ''));
    
    if (int1 <= int2) {
        document.getElementById('circle').style.display = 'none';
        document.getElementById('congrats').style.display = 'flex';
        document.getElementById('congrats').style.animation = 'fadeInOut 2s 1';
        generateCard1();
    }
    else if(int1 > int2) {
        document.getElementById('circle').style.display = 'none';
        document.getElementById('fail').style.display = 'flex';
        document.getElementById('fail').style.animation = 'fadeInOut 2s 1';
        generateCard1();
    }
}

function lower() {
    var int1 = parseInt(values[card1].replace(/,/g, ''));
    var int2 = parseInt(values[card2].replace(/,/g, ''));
    
    if (int1 >= int2) {
        document.getElementById('circle').style.display = 'none';
        document.getElementById('congrats').style.display = 'flex';
        document.getElementById('congrats').style.animation = 'fadeInOut 2s 1';
        generateCard1();
    }
    else if(int1 < int2) {
        document.getElementById('circle').style.display = 'none';
        document.getElementById('fail').style.display = 'flex';
        document.getElementById('fail').style.animation = 'fadeInOut 2s 1';
        generateCard1();
    }
}
//-------------------------------------------------------------------------//



//-------------------------------------------------------------------------//
//            Generate both cards
//-------------------------------------------------------------------------//
function generateCard1() {
                    
    card1 = parseInt(Math.random() * names.length);
            
    // Check if card has been chosen before
    var idx = chosen.indexOf(card1);
    while(idx != -1) {
        card1 = parseInt(Math.random() * names.length);
        idx = chosen.indexOf(card1);
    }
    chosen.push(card1);
                    
    generateCard2();
            
}
function generateCard2() {
    
    card2 = parseInt(Math.random() * names.length);
            
    // Check if card has been chosen before
    var idx2 = chosen.indexOf(card2);
    while(idx2 != -1) {
        card2 = parseInt(Math.random() * names.length);
        idx2 = chosen.indexOf(card2);
    }
    if (beginLength == 0) {
        beginLength++;
        displayCards();
    }
    chosen.push(card2);
    
}
//-------------------------------------------------------------------------//    
function displayCards() {
    document.getElementById('cardName').innerHTML = "'"+names[card1]+"'";
    document.getElementById('amtSearches').innerHTML ="$" + values[card1];
    document.getElementById('card1').style.backgroundImage = "url('"+card1+".png')";
    document.getElementById('cardName2').innerHTML = "'"+names[card2]+"'";
    document.getElementById('c2inner').innerHTML = 'money than '+names[card1];
    document.getElementById('card2').style.backgroundImage = "url('"+card2+".png')";
}

        
        
        
window.addEventListener('load',start,false);