var anonymus = {
    get colors() {
        return [
            "Red",
            "Green",
            "Blue",
            "Black",
            "White",
            "Orange",
            "Lime",
            "Pink",
            "Violet",
            "Yellow",
            "Teal",
            "Sapphire",
            "Ruby",
            "Darkred",
            "Crimson",
            "Gold",
            "Darkorange",
            "Forestgreen",
            "Darkgreen",
            "Greenyellow",
            "Yellowgreen",
            "Seagreen",
            "Cyan",
            "Darkcyan",
            "Lightblue",
            "Skyblue",
            "Steelblue",
            "Darkblue",
            "Lightblue",
            "Magenta",
            "Darkviolet",
            "Darkmagenta",
            "Purple",
            "Indigo",
            "Lightpink",
            "Hotpink",
            "Deeppink",
            "Aliceblue",
            "Ghostwhite",
            "Mistyrose",
            "Gray",
            "Lightgray",
            "Silver",
            "Darkgray",
            "Slategray",
            "Rosybrown",
            "Sandybrown",
            "Chocolate",
            "Brown",
            "Khaki",
            "Lawngreen",
            "Limegreen",
            "Bronze",
            "Emerald",
            "Ivory",
            "Navyblue",
            "Rainbow",
            "Turquoise",
            "Ultramarine",
            "Terracotta"
        ]
    },
    get animals() {
        return [
            "albatross",
            "ant",
            "ape",
            "bat",
            "bear",
            "beaver",
            "bee",
            "bird",
            "bison",
            "boar",
            "buffalo",
            "butterfly",
            "cat",
            "chameleon",
            "cheetah",
            "chicken",
            "cobra",
            "coyote",
            "crab",
            "crocodile",
            "crow",
            "deer",
            "dog",
            "dolphin",
            "donkey",
            "dragonfly",
            "duck",
            "eagle",
            "elephant",
            "falcon",
            "fox",
            "frog",
            "giraffe",
            "goat",
            "gorilla",
            "grasshopper",
            "hamster",
            "hawk",
            "hedgehog",
            "hornet",
            "horse",
            "hummingbird",
            "jaguar",
            "jellyfish",
            "kangaroo",
            "koala",
            "lemur",
            "leopard",
            "lion",
            "llama",
            "lobster",
            "mammoth",
            "mole",
            "mongoose",
            "monkey",
            "moose",
            "mouse",
            "octopus",
            "otter",
            "owl",
            "panther",
            "parrot",
            "panda",
            "pelican",
            "penguin",
            "rabbit",
            "raccoon",
            "ram",
            "raven",
            "salamander",
            "seal",
            "shark",
            "sheep",
            "snake",
            "spider",
            "squid",
            "squirrel",
            "swan",
            "tiger",
            "turtle",
            "wasp",
            "wolf",
            "yak",
            "zebra"
        ]
    },
    get sizeColors() {
        return this.colors.length;
    },
    get sizeAnimals() {
        return this.animals.length;
    },
    get sizeMax() {
        return this.sizeColors * this.sizeAnimals;
    },
    get randomColor() {
        return this.colors[Math.floor(Math.random() * this.sizeColors)];
    },
    get randomAnimal() {
        return this.animals[Math.floor(Math.random() * this.sizeAnimals)];
    },
    create: function (amount) {
        if (amount) {
            amount = parseInt(amount);

            if (!Number.isInteger(amount)) {
                throw new Error("Amount has to be an integer!");
            }

            if (amount > this.sizeMax) {
                throw new Error("Amount cannot exceed 'anonymus.maxSize'!");
            }
            
            var result = [],
                tmp;

            for (var i = 0; i < amount; i++) {
                tmp = this.randomColor + " " + this.randomAnimal;

                while (result.includes(tmp)) {
                    tmp = this.randomColor + " " + this.randomAnimal;
                }

                result.push(tmp);
            }
            
            return result;
        }

        return this.randomColor + " " + this.randomAnimal;
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = anonymus;
}