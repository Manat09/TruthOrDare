var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["Сделай Цыганку с кем-то",
    "Повтори любую позу из йоги",
    "Поцелуй в щеку кого-то",
    "Делай звуки стонов 5 секунд",
    "Набери в рот воды на 40 секунд",
    "teacher",
    "old lady",
    "professor",
    "hamster",
    "dog"];


function randGen() {
    return Math.floor(Math.random() * 5);
}

function sentence() {
    var rand1 = Math.floor(Math.random() * 10);
    //                var randCol = [rand1,rand2,rand3,rand4,rand5];
    //                var i = randGen();
    var content = nouns[rand1];

    document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};
sentence();