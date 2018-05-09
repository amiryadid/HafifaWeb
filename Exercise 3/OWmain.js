var generalJson = {
    "names": [
    "Doomfist",
    "Genji",
    "Mccree",
    "Pharah",
    "Reaper",
    "Soldier-76",
    "Sombra",
    "Tracer",
    "Bastion",
    "Hanzo",
    "Junkrat",
    "Mei",
    "Windowmaker",
    "Torbjorn",
    "D.Va",
    "Orisa",
    "Reinhardt",
    "Roadhog",
    "Winston",
    "Zarya",
    "Ana",
    "Brigitte",
    "Lucio",
    "Mercy",
    "Moira",
    "Symmetra",
    "Zenyatta"
],
    "hp": [
    "250",
    "200",
    "200",
    "200",
    "250",
    "200",
    "200",
    "150",
    "200",
    "200",
    "200",
    "250",
    "200",
    "200",
    "400",
    "200",
    "300",
    "600",
    "400",
    "200",
    "200",
    "200",
    "200",
    "200",
    "200",
    "100",
    "50"
],
    "roles": [
    "Offense",
    "Offense",
    "Offense",
    "Offense",
    "Offense",
    "Offense",
    "Offense",
    "Offense",
    "Defense",
    "Defense",
    "Defense",
    "Defense",
    "Defense",
    "Defense",
    "Tank",
    "Tank",
    "Tank",
    "Tank",
    "Tank",
    "Tank",
    "Support",
    "Support",
    "Support",
    "Support",
    "Support",
    "Support",
    "Support"
]
}

const names = generalJson.names;
const hps = generalJson.hp;
const roles = generalJson.roles;

const getHeros = () => {return names.map((name, index) => {return {name: name, hp: hps[index], role: roles[index]}})};

console.log(getHeros());

const groupBy = (heros, criteria='role') => {
    var sorted = {};
    for(hero of heros) {
        if(!sorted[hero[criteria]]) {
            sorted[hero[criteria]] = [];
        }

        sorted[hero[criteria]].push(hero);
    }

    return sorted;
};

console.log(groupBy(getHeros()));
console.log(groupBy(getHeros(), 'hp'));

const getByRoles = (heros, ...roles) => {
    return heros.filter((hero) => roles.includes(hero.role));
};

console.log(getByRoles(getHeros(), "Support"));
console.log(getByRoles(getHeros(), "Support", "Offense"));

const makeHerosNice = (heros) => {
    return heros.map((hero) => {
        hero.sayHello = () => {console.log(`Hi! My name is ${hero.name}, nice to meet you!`)};
        return hero;
    });
};

const niceHeros = makeHerosNice(getHeros());
niceHeros[0].sayHello();