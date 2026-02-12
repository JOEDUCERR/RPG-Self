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
        "button text": ["Go to Sector 4", "Go to City Centre", "Go to Chas"],
        "button function": [goSector4, goCityCentre, goChas],
        text: "You go back and see the signboard, Hatia Sabji Market."
    },
    {
        name: "Hatia Sabji Market",
        "button text": ["Go to Sector 4", "Go to City Centre", "Go to Chas"],
        "button function": [goSector4, goCityCentre, goChas],
        text: "You go back and see the signboard, Hatia Sabji Market."
    },
    {
        name: "Hatia Sabji Market",
        "button text": ["Go to Sector 4", "Go to City Centre", "Go to Chas"],
        "button function": [goSector4, goCityCentre, goChas],
        text: "You go back and see the signboard, Hatia Sabji Market."
    },
];

function goSector4() {

}
function goCityCentre() {

}
function goChas() {

}