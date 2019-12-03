var anonymus = {
    /**
     * List of colors `anonymus` will use
     */
    get colors() {
        return [
            //-- White
            "White",
            "Ghostwhite",
            "Ivory",
            "Vanilla",

            //-- Red
            "Red",
            "Darkred",
            "Ruby",
            "Crimson",

            //-- Green
            "Green",
            "Darkgreen",
            "Lime",
            "Forestgreen",
            "Sapphire",
            "Jade",
            "Emerald",
            "Yellowgreen",
            "Seagreen",
            "Lawngreen",
            "Limegreen",

            //-- Orange
            "Orange",
            "Darkorange",
            "Bronze",
            "Sepia",
            "Amber",

            //-- Yellow
            "Yellow",
            "Gold",
            "Khaki",
            "Greenyellow",
            "Beige",

            //-- Gray
            "Gray",
            "Lightgray",
            "Darkgray",
            "Slategray",
            "Shadow",
            "Graphite",
            "Silver",

            //-- Black
            "Black",
            "Ebony",
            "Midnight",
            "Ink",
            "Obsidian",

            //-- Blue
            "Blue",
            "Skyblue",
            "Steelblue",
            "Indigo",
            "Teal",
            "Cyan",
            "Darkcyan",
            "Lightblue",
            "Darkblue",
            "Aliceblue",
            "Navyblue",
            "Turquoise",
            "Ultramarine",

            //-- Brown
            "Brown",
            "Chocolate",
            "Hickory",
            "Umber",

            //-- Purple
            "Purple",
            "Violet",
            "Darkviolet",
            "Magenta",
            "Darkmagenta",
            "Lilac",
            "Amthyst",

            //-- Pink
            "Pink",
            "Mistyrose",
            "Hotpink",
            "Lightpink",
            "Rose",
            "Rosewood",

            //-- Misc
            "Rainbow"
        ]
    },
    /**
     * List of animals `anonymus` will use
     */
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
            "chinchilla",
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
            "fish",
            "fox",
            "frog",
            "gecko",
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
            "lizard",
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
            "starfish",
            "swan",
            "tiger",
            "turtle",
            "wasp",
            "wolf",
            "yak",
            "zebra"
        ]
    },
    /**
     * Number of entries of `anonymus.colors`
     */
    get sizeColors() {
        return this.colors.length;
    },
    /**
     * Number of entries of `anonymus.animals`
     */
    get sizeAnimals() {
        return this.animals.length;
    },
    /**
     * Number of unique entries `anonymus` can generate
     */
    get sizeMax() {
        return this.sizeColors * this.sizeAnimals;
    },
    /**
     * Returns a random color
     */
    get randomColor() {
        return this.colors[Math.floor(Math.random() * this.sizeColors)];
    },
    /**
     * Returns a random animal
     */
    get randomAnimal() {
        return this.animals[Math.floor(Math.random() * this.sizeAnimals)];
    },
    /**
     * Returns the current version of `anonymus`
     */
    get version() {
        return [1, 6, 3].join(".");
    },
    /**
     * Generates one or more unique names
     */
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