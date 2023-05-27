var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
var body = document.getElementsByTagName("body")[0];
var score = 0;
var highScore = 0
var stopScore = false;
var gameOverScreen = document.getElementById("gameOverScreen");
const header = document.querySelector('.eraHeader')
const info = document.querySelector('.eraInfo')

const chars = [
    './images/astronaut.png',
    './images/2.png',
    './images/3.gif',
    './images/dino.gif',
    './images/5.png',
    './images/6.png',
    
]

// era info/facts

const eras = [
    "The Solar System",
    "The Milky Way",
    // "Edicaran",
    // "Ordovician",
    // "Devonian",
    "The Black hole",
    "Mesozoic",
    "Oligocene",
    "Quaternary"
]

    const eraInfo = [
        `The Solar System is the gravitationally bound system of the Sun and the objects that orbit it, either directly or indirectly. Of the objects that orbit the Sun directly, the largest are the eight planets, with the remainder being smaller objects, such as dwarf planets and small Solar System bodies.`,
        `The Milky Way is a barred spiral galaxy with a diameter between 100,000 and 150,000 light-years. It is estimated to contain 100–400 billion stars and more than 100 billion planets.`,
        `A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape. Black holes are formed from the remnants of a large star that has collapsed in on itself. They can have masses ranging from a few times that of the Sun to billions of times its mass.`,
        `Organizations have proposed plans for a human mission to Mars, the first step towards any colonization effort, but no person has set foot on the planet, and there have been no return missions. However, landers and rovers have successfully explored the planetary surface and delivered information about conditions on the ground.`,
        `The Hubble Space Telescope is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It is one of the largest and most versatile space telescopes, renowned both as a vital research tool and as a public relations boon for astronomy.`,
        `Perseverance, nicknamed Percy, is a car-sized Mars rover designed to explore the Jezero crater on Mars as part of NASA’s Mars 2020 mission. It was manufactured by the Jet Propulsion Laboratory and launched on July 30, 2020`
    ]

// checks which key is pressed
function whichKey(event){
    var key = event.keyCode;

    //jumps if key is spacebar, upArrow or 'w'
    if(key == 32 || key == 38 || key == 87){
        jump();
    }

}

//makes the character jump
function jump(){

    if(character.classList.contains("animate")) {return};
    character.classList.add("animate");
    setTimeout(
        () => character.classList.remove("animate"), 800
    );
}

function toggleObstacle(){
    if(obstacle.style.animation != "0s ease 0s 1 normal none running none"){
        obstacle.style.animation = "none"; //stop obstacles
        console.log("stopped");
        console.log(obstacle.style.animation);
    }
    else{
        obstacle.style.animation = "obstacle 1s linear infinite"; //start obstacles
        console.log("started");
    }
}

var gameover = false
//checks if character is touching obstacle
var checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if(characterTop >= 130 && obstacleLeft <= 20 && obstacleLeft >= -20)
    {
        gameover = true
        toggleObstacle();
        stopScore = true; //stop incrementing score if game is over
        gameOverScreen.style.display = "block"; //display game over screen
        document.getElementById("scoreSpan2").innerHTML = Math.floor(score/100); //display score
        //set new highScore 
        if(score > highScore) highScore = score;
        // score = 0;
        console.log(highScore);
        document.getElementById("highScore").innerHTML = Math.floor(highScore/100);
            
    }
    //if not touching, increment score as obstacle passes below it
    else if(stopScore == false) 
    {
            let displayScore = incrementScore();
            document.getElementById("scoreSpan").innerHTML = displayScore;
    }


    }, 10);
    var i = -1;
    const incre = () => {
        if(!gameover){i++;
            console.log("sdfger")
        header.innerText = eras[i]
        info.innerText = eraInfo[i]
        character.style.backgroundImage = `url(${chars[i]})`
        setTimeout(incre, 5000)
        } else {
            document.querySelector(".gameon").style.display = 'block'
            document.querySelector(".gameover").style.display = 'block'
        }
        }
        // setTimeout(incre, 3000)
        incre()

//restart page on clicking restart button
function restart(){
    document.location.reload();
    console.log('SDFSADGSADF')
    document.querySelector(".gameon").style.display = 'block'
    document.querySelector(".gameover").style.display = 'none'
    toggleObstacle();
    score = 0; 
    gameOverScreen.style.display = "none";
    stopScore = false; 
    level0();
}


function incrementScore() {
    score++;
    let displayScore = Math.floor(score/100);
    // if(displayScore  >= 3){
    //     level1();
    // }
    // if(displayScore >=5){
    //     darkMode();
    // }

    return displayScore;
}

function level0(){
    character.classList.remove("level0");
}

function level1 (){
    character.classList.add("level0");
}

function darkMode(){
    // body.style.backgroundColor = "black";
    body.classList.add("darkMode");
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  window.addEventListener('keydown', function(e) {
    if (e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });   