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
    './images/1.png',
    './images/2.png',
    './images/3.gif',
    './images/dino.gif',
    './images/5.png',
    './images/6.png',
    
]

// era info/facts

const eras = [
    "Archean",
    "Proterozoic",
    // "Edicaran",
    // "Ordovician",
    // "Devonian",
    "Carboniferous",
    "Mesozoic",
    "Oligocene",
    "Quaternary"
]

const eraInfo = [
    `The Archean Eon is the second of four geologic eons of Earth's history,representing the time from 4,000 to 2,500 million years ago. In this time, the Earth's crust had cooled enough for continents to form and for the earliest known life to start. Life was simple throughout the Archean, mostly represented by shallow-water microbial mats called stromatolites, and the atmosphere lacked free oxygen. The Archean was preceded by the Hadean Eon and followed by the Proterozoic.`
    ,`The Proterozoic is a geological eon spanning the time interval from 2500 to 541 million years ago. It is the most recent part of the Precambrian "supereon." It is also the longest eon of the Earth's geologic time scale, and it is subdivided into three geologic eras (from oldest to youngest): the Paleoproterozoic, Mesoproterozoic, and Neoproterozoic. The Proterozoic covers the time from the appearance of oxygen in Earth's atmosphere to just before the proliferation of complex life (such as trilobites or corals) on the Earth. The name Proterozoic combines two forms of ultimately Greek origin: protero- meaning 'former, earlier', and -zoic, 'of life'.`
    // , `The fossil record from the Ediacaran Period is sparse, as more easily fossilized hard-shelled animals had yet to evolve. The Ediacaran biota include the oldest definite multicellular organisms (with specialized tissues), the most common types of which resemble segmented worms, fronds, disks, or immobile bags. Some hard-shelled agglutinated foraminifera are known from latest Ediacaran sediments of western Siberia.The Ediacaran Period is a geological period that spans 94 million years from the end of the Cryogenian Period 635 million years ago (Mya), to the beginning of the Cambrian Period 541 Mya. It marks the end of the Proterozoic Eon, and the beginning of the Phanerozoic Eon. It is named after the Ediacara Hills of South Australia. The fossil record from the Ediacaran Period is sparse, as more easily fossilized hard-shelled animals had yet to evolve. The Ediacaran biota include the oldest definite multicellular organisms (with specialized tissues), the most common types of which resemble segmented worms, fronds, disks, or immobile bags. Some hard-shelled agglutinated foraminifera are known from latest Ediacaran sediments of western Siberia.`
    // , `The Ordovician is a geologic period and system, the second of six periods of the Paleozoic Era. The Ordovician spans 41.6 million years from the end of the Cambrian Period 485.4 million years ago (Mya) to the start of the Silurian Period 443.8 Mya.For most of the Late Ordovician life continued to flourish, but at and near the end of the period there were mass-extinction events that seriously affected conodonts and planktonic forms like graptolites. The trilobites Agnostida and Ptychopariida completely died out, and the Asaphida were much reduced. Brachiopods, bryozoans and echinoderms were also heavily affected, and the endocerid cephalopods died out completely, except for possible rare Silurian forms.`
    // , `The Devonian is a geologic period and system of the Paleozoic, spanning 60.3 million years from the end of the Silurian, 419.2 million years ago (Mya), to the beginning of the Carboniferous, 358.9 Mya.[11] It is named after Devon, England, where rocks from this period were first studied.By the Devonian Period, life was well underway in its colonisation of the land. The moss forests and bacterial and algal mats of the Silurian were joined early in the period by primitive rooted plants that created the first stable soils and harbored arthropods like mites, scorpions, trigonotarbids[33] and myriapods (although arthropods appeared on land much earlier than in the Early Devonian[34] and the existence of fossils such as Protichnites suggest that amphibious arthropods may have appeared as early as the Cambrian)`
    , `The Carboniferous is a geologic period and system of the Paleozoic that spans 60 million years from the end of the Devonian Period 358.9 million years ago, to the beginning of the Permian Period, 298.9 Mya. The name Carboniferous means "coal-bearing", from the Latin carbō ("coal") and ferō ("I bear, I carry"), and refers to the many coal beds formed globally during that time. Terrestrial animal life was well established by the Carboniferous period.[10] Tetrapods (four limbed vertebrates), which had originated from lobe-finned fish during the preceding Devonian, diversified during the Carboniferous, including early amphibian lineages such as temnospondyls, with the first appearance of amniotes, including synapsids (the group to which modern mammals belong) and reptiles during the late Carboniferous.`
    , `The Mesozoic Era, also called the Age of Reptiles and the Age of Conifers,[3] is the second-to-last era of Earth's geological history, lasting from about 252 to 66 million years ago and comprising the Triassic, Jurassic and Cretaceous periods. It is characterized by the dominance of archosaurian reptiles, like the dinosaurs; an abundance of conifers and ferns; a hot greenhouse climate; and the tectonic break-up of Pangaea. The Mesozoic is the middle of three eras since complex life evolved: the Paleozoic, the Mesozoic, and the Cenozoic.`
    , `The Oligocene is a geologic epoch of the Paleogene Period and extends from about 33.9 million to 23 million years before the present (33.9±0.1 to 23.03±0.05 Ma). As with other older geologic periods, the rock beds that define the epoch are well identified but the exact dates of the start and end of the epoch are slightly uncertain. Most extant mammal families had appeared by the end of the Oligocene. These included primitive three-toed horses, rhinoceroses, camels, deer, and peccaries. Carnivores such as dogs, nimravids (ancestor of cats), bears, weasels, and raccoons began to replace the creodonts that had dominated the Paleocene in the Old World. Rodents and rabbits underwent tremendous diversification due to the increase in suitable habitats for ground-dwelling seed eaters, as habitats for squirrel-like nut- and fruit-eaters diminished. The primates, once present in Eurasia, were reduced in range to Africa and South America.`
    , `Quaternary is the current and most recent of the three periods of the Cenozoic Era in the geologic time scale of the International Commission on Stratigraphy (ICS).[4] It follows the Neogene Period and spans from 2.588 ± 0.005 million years ago to the present.[4] The Quaternary Period is divided into two epochs: the Pleistocene (2.588 million years ago to 11.7 thousand years ago) and the Holocene (11.7 thousand years ago to today, although a third epoch, the Anthropocene, has been proposed but is not yet officially recognized by the ICS).[4] The informal term "Late Quaternary" refers to the past 0.5–1.0 million years`
    
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
        setTimeout(incre, 10000)
        } else {
            document.querySelector(".gameon").style.display = 'none'
            document.querySelector(".gameover").style.display = 'block'
        }
        }
        // setTimeout(incre, 3000)
        incre()

//restart page on clicking restart button
function restart(){
    // document.location.reload();
    console.log('SDFSADGSADF')
    document.querySelector(".gameon").style.display = 'block'
            document.querySelector(".gameover").style.display = 'none'
    toggleObstacle();
    score = 0; 
    gameOverScreen.style.display = "none";
    stopScore = false; 
    level0();
    // body.classList.remove("darkMode");
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