const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  var first_name_and_last_name = [];

function seventy(boss) {
    let i = 0;
    let tab = [];

    console.log("les entrepreneurs nee dans les annees 70 sont: ")
    while (i < boss.length) {
        Object.entries(boss[i]).forEach(function([key, value]) {
            if (key == "year" && (value <= 1979 && value >= 1970)) {
                console.log(boss[i].first, " ", boss[i].last);
                tab.push(boss[i].first + " " + boss[i].last);
            }
        });
    i++;
    }

    return tab;
}

function first_name_and_last_name_in_tab(boss) {
    let i = 0;
    
    while (i < boss.length) {
        first_name_and_last_name.push(boss[i].first + " " + boss[i].last)
        i++;
    }
}

function age_of_boss_today(boss) {
    let i = 0;
    
    while (i < boss.length) {
        console.log("Aujourd'hui", boss[i].first, boss[i].last, "as", 2019 - boss[i].year, "ans")
        i++;
    }
}

function sort_tab(entrepreneurs) {
    return entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
}

seventy(entrepreneurs);
first_name_and_last_name_in_tab(entrepreneurs);
console.log(first_name_and_last_name);
age_of_boss_today(entrepreneurs);
console.log("voici la liste des entrepreneurs dans l'ordre alphabetique\n", sort_tab(entrepreneurs));