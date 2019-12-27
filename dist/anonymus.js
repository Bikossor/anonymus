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
        ];
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
        ];
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
            var result = [], tmp;
            for (var i = 0; i < amount; i++) {
                tmp = this.randomColor + " " + this.randomAnimal;
                while (result.includes(tmp)) {
                    tmp = this.randomColor + " " + this.randomAnimal;
                }
                result.push(tmp);
            }
            return result;
        }
        return [
            this.randomColor + " " + this.randomAnimal
        ];
    }
};
if (typeof module !== "undefined" && module.exports) {
    module.exports = anonymus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYW5vbnltdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxRQUFRLEdBQUc7SUFDWDs7T0FFRztJQUNILElBQUksTUFBTTtRQUNOLE9BQU87WUFDSCxVQUFVO1lBQ1YsT0FBTztZQUNQLFlBQVk7WUFDWixPQUFPO1lBQ1AsU0FBUztZQUVULFFBQVE7WUFDUixLQUFLO1lBQ0wsU0FBUztZQUNULE1BQU07WUFDTixTQUFTO1lBRVQsVUFBVTtZQUNWLE9BQU87WUFDUCxXQUFXO1lBQ1gsTUFBTTtZQUNOLGFBQWE7WUFDYixVQUFVO1lBQ1YsTUFBTTtZQUNOLFNBQVM7WUFDVCxhQUFhO1lBQ2IsVUFBVTtZQUNWLFdBQVc7WUFDWCxXQUFXO1lBRVgsV0FBVztZQUNYLFFBQVE7WUFDUixZQUFZO1lBQ1osUUFBUTtZQUNSLE9BQU87WUFDUCxPQUFPO1lBRVAsV0FBVztZQUNYLFFBQVE7WUFDUixNQUFNO1lBQ04sT0FBTztZQUNQLGFBQWE7WUFDYixPQUFPO1lBRVAsU0FBUztZQUNULE1BQU07WUFDTixXQUFXO1lBQ1gsVUFBVTtZQUNWLFdBQVc7WUFDWCxRQUFRO1lBQ1IsVUFBVTtZQUNWLFFBQVE7WUFFUixVQUFVO1lBQ1YsT0FBTztZQUNQLE9BQU87WUFDUCxVQUFVO1lBQ1YsS0FBSztZQUNMLFVBQVU7WUFFVixTQUFTO1lBQ1QsTUFBTTtZQUNOLFNBQVM7WUFDVCxXQUFXO1lBQ1gsUUFBUTtZQUNSLE1BQU07WUFDTixNQUFNO1lBQ04sVUFBVTtZQUNWLFdBQVc7WUFDWCxVQUFVO1lBQ1YsV0FBVztZQUNYLFVBQVU7WUFDVixXQUFXO1lBQ1gsYUFBYTtZQUViLFVBQVU7WUFDVixPQUFPO1lBQ1AsV0FBVztZQUNYLFNBQVM7WUFDVCxPQUFPO1lBRVAsV0FBVztZQUNYLFFBQVE7WUFDUixRQUFRO1lBQ1IsWUFBWTtZQUNaLFNBQVM7WUFDVCxhQUFhO1lBQ2IsT0FB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