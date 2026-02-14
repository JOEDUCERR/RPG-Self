let health = 100;
let xp = 0;
let currentWeapon = 0;
let gold = 50;

let fighting;
let zombieHealth;
let inventory = ["stick"];

const healthText = document.querySelector("#health")
const xpText = document.querySelector("#xp")
const button1 = document.querySelector("#btn1")
const button2 = document.querySelector("#btn2")
const button3 = document.querySelector("#btn3")
const text = document.querySelector("#text")

const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "belan",
        power: 15
    },
    {
        name: "pan",
        power: 30
    },
    {
        name: "mjolnir",
        power: 60
    }
]

const zombies = [
    {
        name: "basic Zombie",
        level: 2,
        health: 15
    },
    {
        name: "Night Walker",
        level: 5,
        health: 30
    },
    {
        name: "Granny",
        level: 10,
        health: 50
    }
]



const locations = [
    {
        name: "Hatia Sabji Market",
        "button text": ["Go to Sector 4", "Go to City Centre", "Go to Chas"],
        "button function": [goSector4, goCityCentre, goChas],
        text: "You go back and see the signboard, Hatia Sabji Market."
    },
    {
        name: "Sector 4",
        "button text": ["Enter Home (Safehouse)", "Pet Velvet", "Back to Hatia"],
        "button function": [enterHome, petVelvet, goHatia],
        text: "You enter Sector 4, your home colony. You see Velvet your pet dog at your home."
    },
    {
        name: "City Centre",
        "button text": ["Buy Cough Syrup (10 Gold)", "Buy Weapon (30 Gold)", "Back to Hatia"],
        "button function": [buyCoughSyrup, buyWeapon, goHatia],
        text: "You go back and see the signboard, Hatia Sabji Market."
    },
    {
        name: "Chas",
        "button text": ["Buy Buff (50 Gold)", "IDK", "Back yo Hatia"],
        "button function": [buyBuff, idk, goHatia],
        text: "You go back and see the signboard, Hatia Sabji Market."
    },
];

button1.onclick = goSector4;
button2.onclick = goCityCentre;
button3.onclick = goChas;

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    button1.onclick = location["button function"][0];
    button2.onclick = location["button function"][1];
    button3.onclick = location["button function"][2];

    text.innerText = location.text;
}

function goHatia() {
    update(locations[0]);
}

function goSector4() {
    update(locations[1]);

}
function goCityCentre() {
    update(locations[2]);

}
function goChas() {
    update(locations[3]);

}

function enterHome() {
    health = health + 10;
    healthText = health;
}

function petVelvet() {
    xp = xp+1;
}

function buyCoughSyrup() {
    health = health + 30;
    gold = gold - 10;
}
function buyWeapon() {

}

function buyBuff() {
    xp = xp + 50;
    gold = gold - 50;
}
function idk() {
    text.innerText = "idk";
}