let nb = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?", 1);
nb = Number(nb);

function pyramide(nb) {
    let res = "";
    let i = 1;
    let j = 0;

    while (i <= nb) {
        j = 0;
        while (j < nb) {
            if (j < nb - i)
                res += " ";
            else
                res += "#";
            j++;
        }
        res += "\n";
        i++;
    }
    return res;
}

let res = pyramide(nb);

console.log(res);