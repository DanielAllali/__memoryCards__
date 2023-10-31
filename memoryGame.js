let clickS = document.getElementById("clickS");
let winS = document.getElementById("winS");
let gameEndS = document.getElementById("gameEndS");

let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let ten = document.getElementById("10");
let eleven = document.getElementById("11");
let twelve = document.getElementById("12");
let thirteen = document.getElementById("13");
let fourteen = document.getElementById("14");
let fiveteen = document.getElementById("15");
let sixteen = document.getElementById("16");

let TDone = document.getElementById("td1");
let TDtwo = document.getElementById("td2");
let TDthree = document.getElementById("td3");
let TDfour = document.getElementById("td4");
let TDfive = document.getElementById("td5");
let TDsix = document.getElementById("td6");
let TDseven = document.getElementById("td7");
let TDeight = document.getElementById("td8");
let TDnine = document.getElementById("td9");
let TDten = document.getElementById("td10");
let TDeleven = document.getElementById("td11");
let TDtwelve = document.getElementById("td12");
let TDthirteen = document.getElementById("td13");
let TDfourteen = document.getElementById("td14");
let TDfiveteen = document.getElementById("td15");
let TDsixteen = document.getElementById("td16");

const img1 = "./images/blueGem.png";
const img2 = "./images/goldGem.png";
const img3 = "./images/greenGem.png";
const img4 = "./images/pinkGem.png";
const img5 = "./images/purpleGem.png";
const img6 = "./images/redGem.png";
const img7 = "./images/darkredGem.png";
const img8 = "./images/whiteGem.png";

let wrapper = document.getElementById("wrapper");

/* random locations for gems */
let gems = [img1, img2, img3, img4, img5, img6, img7, img8, img1, img2, img3, img4, img5, img6, img7, img8]
let gemsRandom = [];
function randomBoard() {
    randomGems();
    function randomGems() {
        for (let times = 0; times < 16; times++) {
            randomLimit();
            function randomLimit() {
                let random = Math.floor(Math.random() * gems.length);
                if (gems[random] == undefined) {
                    randomLimit();
                }
                else {
                    gemsRandom[times] = gems[random];
                    gems[random] = undefined;
                }
            }
        }
    }
    one.src = gemsRandom[0];
    two.src = gemsRandom[1];
    three.src = gemsRandom[2];
    four.src = gemsRandom[3];
    five.src = gemsRandom[4];
    six.src = gemsRandom[5];
    seven.src = gemsRandom[6];
    eight.src = gemsRandom[7];
    nine.src = gemsRandom[8];
    ten.src = gemsRandom[9];
    eleven.src = gemsRandom[10];
    twelve.src = gemsRandom[11];
    thirteen.src = gemsRandom[12];
    fourteen.src = gemsRandom[13];
    fiveteen.src = gemsRandom[14];
    sixteen.src = gemsRandom[15];
}
randomBoard();
let turn = document.getElementById("turn");
function turnSwitcher(team, otherTeam) {
    if (turn.innerHTML == team) {
        turn.innerHTML = otherTeam;
        turn.style.color = otherTeam;
    }
}


let choice = 1;
let firstCard;
let firstCardLocation;
let secoundCard;
let blueP = document.getElementById("blueP");
let redP = document.getElementById("redP");
let redPoints = 0;
let bluePoints = 0;
let firstTd;

function firstChoice(location, td) {
    if (choice == 1) {
        clickS.play();
        location.style.visibility = "visible";
        firstCard = location.src;
        firstCardLocation = location;
        choice = 2;
        /* which td it is */
        removeEventListenerTd(td, location);
        firstTd = td;
    }
    else {
        secoundCard = location;
        secoundChoice(secoundCard, td);
    }
}
function secoundChoice(location2, tdd, tdd2) {
    location2.style.visibility = "visible";
    if (firstCard == location2.src) {
        winS.play();
        wrapper.style.display = "block";
        setTimeout(function () {
            resetBoard(firstCardLocation, location2)
        }, 2000)
        whatTurnWon();
        tdd.style.display = "none";
        firstTd.style.display = "none";
    }
    else {
        clickS.pause();
        clickS.currentTime = 0;
        clickS.play();
        wrapper.style.display = "block";
        whatTurnLose();
        setTimeout(resetBoard, 2000)
    }
    choice = 1;
}
function whatTurnWon() {
    if (turn.innerHTML == "red") {
        redPoints++;
        redP.innerHTML = "Red: " + redPoints;
        turnSwitcher("red", "blue");
        winChecker();
        return;
    }
    if (turn.innerHTML == "blue") {
        bluePoints++;
        blueP.innerHTML = "Blue: " + bluePoints;
        turnSwitcher("blue", "red");
        winChecker();
        return;
    }
}
function whatTurnLose() {
    if (turn.innerHTML == "red") {
        turnSwitcher("red", "blue");
        return;
    }
    if (turn.innerHTML == "blue") {
        turnSwitcher("blue", "red");
        return;
    }
}
/* reset board */
function resetBoard(firstLocation, secoundLocation) {
    wrapper.style.display = "none";
    if (one != firstLocation && one != secoundLocation) {
        one.style.visibility = "hidden";
        TDone.addEventListener("click", TDoneClick)
    }
    else {
        one = undefined;
    }
    if (two != firstLocation && two != secoundLocation) {
        two.style.visibility = "hidden";
        TDtwo.addEventListener("click", TDtwoClick)
    }
    else {
        two = undefined;
    }
    if (three != firstLocation && three != secoundLocation) {
        three.style.visibility = "hidden";
        TDthree.addEventListener("click", TDthreeClick)
    }
    else {
        three = undefined;
    }
    if (four != firstLocation && four != secoundLocation) {
        four.style.visibility = "hidden";
        TDfour.addEventListener("click", TDfourClick)
    }
    else {
        four = undefined;
    }
    if (five != firstLocation && five != secoundLocation) {
        five.style.visibility = "hidden";
        TDfive.addEventListener("click", TDfiveClick)
    }
    else {
        five = undefined;
    }
    if (six != firstLocation && six != secoundLocation) {
        six.style.visibility = "hidden";
        TDsix.addEventListener("click", TDsixClick)
    }
    else {
        six = undefined;
    }
    if (seven != firstLocation && seven != secoundLocation) {
        seven.style.visibility = "hidden";
        TDseven.addEventListener("click", TDsevenClick)
    }
    else {
        seven = undefined;
    }
    if (eight != firstLocation && eight != secoundLocation) {
        eight.style.visibility = "hidden";
        TDeight.addEventListener("click", TDeightClick)
    }
    else {
        eight = undefined;
    }
    if (nine != firstLocation && nine != secoundLocation) {
        nine.style.visibility = "hidden";
        TDnine.addEventListener("click", TDnineClick)
    }
    else {
        nine = undefined;
    }
    if (ten != firstLocation && ten != secoundLocation) {
        ten.style.visibility = "hidden";
        TDten.addEventListener("click", TDtenClick)
    }
    else {
        ten = undefined;
    }
    if (eleven != firstLocation && eleven != secoundLocation) {
        eleven.style.visibility = "hidden";
        TDeleven.addEventListener("click", TDelevenClick)
    }
    else {
        eleven = undefined;
    }
    if (twelve != firstLocation && twelve != secoundLocation) {
        twelve.style.visibility = "hidden";
        TDtwelve.addEventListener("click", TDtwelveClick)
    }
    else {
        twelve = undefined;
    }
    if (thirteen != firstLocation && thirteen != secoundLocation) {
        thirteen.style.visibility = "hidden";
        TDthirteen.addEventListener("click", TDthirteenClick)
    }
    else {
        thirteen = undefined;
    }
    if (fourteen != firstLocation && fourteen != secoundLocation) {
        fourteen.style.visibility = "hidden";
        TDfourteen.addEventListener("click", TDfourteenClick)
    }
    else {
        fourteen = undefined;
    }
    if (fiveteen != firstLocation && fiveteen != secoundLocation) {
        fiveteen.style.visibility = "hidden";
        TDfiveteen.addEventListener("click", TDfiveteenClick)
    }
    else {
        fiveteen = undefined;
    }
    if (sixteen != firstLocation && sixteen != secoundLocation) {
        sixteen.style.visibility = "hidden";
        TDsixteen.addEventListener("click", TDsixteenClick)
    }
    else {
        sixteen = undefined;
    }
}


/* one */
function TDoneClick() {
    firstChoice(one, TDone);
}
TDone.addEventListener("click", TDoneClick)

/* two */
function TDtwoClick() {
    firstChoice(two, TDtwo);
}
TDtwo.addEventListener("click", TDtwoClick)

/* three */
function TDthreeClick() {
    firstChoice(three, TDthree);
}
TDthree.addEventListener("click", TDthreeClick)

/* four */
function TDfourClick() {
    firstChoice(four, TDfour);
}
TDfour.addEventListener("click", TDfourClick)

/* five */
function TDfiveClick() {
    firstChoice(five, TDfive);
}
TDfive.addEventListener("click", TDfiveClick)

/* six */
function TDsixClick() {
    firstChoice(six, TDsix);
}
TDsix.addEventListener("click", TDsixClick)

/* seven */
function TDsevenClick() {
    firstChoice(seven, TDseven);
}
TDseven.addEventListener("click", TDsevenClick)

/* eight */
function TDeightClick() {
    firstChoice(eight, TDeight);
}
TDeight.addEventListener("click", TDeightClick)

/* nine */
function TDnineClick() {
    firstChoice(nine, TDnine);
}
TDnine.addEventListener("click", TDnineClick)

/* ten */
function TDtenClick() {
    firstChoice(ten, TDten);
}
TDten.addEventListener("click", TDtenClick)

/* eleven */
function TDelevenClick() {
    firstChoice(eleven, TDeleven);
}
TDeleven.addEventListener("click", TDelevenClick)

/* twelve */
function TDtwelveClick() {
    firstChoice(twelve, TDtwelve);
}
TDtwelve.addEventListener("click", TDtwelveClick)

/* thirteen */
function TDthirteenClick() {
    firstChoice(thirteen, TDthirteen);
}
TDthirteen.addEventListener("click", TDthirteenClick)

/* fourteen */
function TDfourteenClick() {
    firstChoice(fourteen, TDfourteen);
}
TDfourteen.addEventListener("click", TDfourteenClick)

/* fiveteen */
function TDfiveteenClick() {
    firstChoice(fiveteen, TDfiveteen);
}
TDfiveteen.addEventListener("click", TDfiveteenClick)

/* sixteen */
function TDsixteenClick() {
    firstChoice(sixteen, TDsixteen);
}
TDsixteen.addEventListener("click", TDsixteenClick)

function removeEventListenerTd(tdNum, place) {
    if (place.id == 1) {
        tdNum.removeEventListener("click", TDoneClick)
    }
    if (place.id == 2) {
        tdNum.removeEventListener("click", TDtwoClick)
    }
    if (place.id == 3) {
        tdNum.removeEventListener("click", TDthreeClick)
    }
    if (place.id == 4) {
        tdNum.removeEventListener("click", TDfourClick)
    }
    if (place.id == 5) {
        tdNum.removeEventListener("click", TDfiveClick)
    }
    if (place.id == 6) {
        tdNum.removeEventListener("click", TDsixClick)
    }
    if (place.id == 7) {
        tdNum.removeEventListener("click", TDsevenClick)
    }
    if (place.id == 8) {
        tdNum.removeEventListener("click", TDeightClick)
    }
    if (place.id == 9) {
        tdNum.removeEventListener("click", TDnineClick)
    }
    if (place.id == 10) {
        tdNum.removeEventListener("click", TDtenClick)
    }
    if (place.id == 11) {
        tdNum.removeEventListener("click", TDelevenClick)
    }
    if (place.id == 12) {
        tdNum.removeEventListener("click", TDtwelveClick)
    }
    if (place.id == 13) {
        tdNum.removeEventListener("click", TDthirteenClick)
    }
    if (place.id == 14) {
        tdNum.removeEventListener("click", TDfourteenClick)
    }
    if (place.id == 15) {
        tdNum.removeEventListener("click", TDfiveteenClick)
    }
    if (place.id == 16) {
        tdNum.removeEventListener("click", TDsixteenClick)
    }
}
let container = document.getElementById("container");
let winDiv = document.getElementById("winDiv")
let player = document.getElementById("player");
let points;


function winChecker() {
    points = redPoints + bluePoints;
    console.log(points);
    if (points == 8) {
        if (redPoints > bluePoints) {
            container.style.filter = "5px";
            winDiv.style.display = "flex";
            player.innerHTML = "red";
            player.style.color = "red";
            gameEndS.play();
        }
        else {
            container.style.filter = "blur(5px)";
            winDiv.style.display = "flex";
            player.innerHTML = "blue";
            player.style.color = "blue";
            gameEndS.play();
        }
    }
}
document.getElementById("anotherGameBtn").addEventListener("click", anotherGame)
function anotherGame() {
    location.reload();
}