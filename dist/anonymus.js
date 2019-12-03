var anonymus = {
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
    get version() {
        return [1, 6, 3].join(".");
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
        return this.randomColor + " " + this.randomAnimal;
    }
};
if (typeof module !== "undefined" && module.exports) {
    module.exports = anonymus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYW5vbnltdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxRQUFRLEdBQUc7SUFDWCxJQUFJLE1BQU07UUFDTixPQUFPO1lBQ0gsVUFBVTtZQUNWLE9BQU87WUFDUCxZQUFZO1lBQ1osT0FBTztZQUNQLFNBQVM7WUFFVCxRQUFRO1lBQ1IsS0FBSztZQUNMLFNBQVM7WUFDVCxNQUFNO1lBQ04sU0FBUztZQUVULFVBQVU7WUFDVixPQUFPO1lBQ1AsV0FBVztZQUNYLE1BQU07WUFDTixhQUFhO1lBQ2IsVUFBVTtZQUNWLE1BQU07WUFDTixTQUFTO1lBQ1QsYUFBYTtZQUNiLFVBQVU7WUFDVixXQUFXO1lBQ1gsV0FBVztZQUVYLFdBQVc7WUFDWCxRQUFRO1lBQ1IsWUFBWTtZQUNaLFFBQVE7WUFDUixPQUFPO1lBQ1AsT0FBTztZQUVQLFdBQVc7WUFDWCxRQUFRO1lBQ1IsTUFBTTtZQUNOLE9BQU87WUFDUCxhQUFhO1lBQ2IsT0FBTztZQUVQLFNBQVM7WUFDVCxNQUFNO1lBQ04sV0FBVztZQUNYLFVBQVU7WUFDVixXQUFXO1lBQ1gsUUFBUTtZQUNSLFVBQVU7WUFDVixRQUFRO1lBRVIsVUFBVTtZQUNWLE9BQU87WUFDUCxPQUFPO1lBQ1AsVUFBVTtZQUNWLEtBQUs7WUFDTCxVQUFVO1lBRVYsU0FBUztZQUNULE1BQU07WUFDTixTQUFTO1lBQ1QsV0FBVztZQUNYLFFBQVE7WUFDUixNQUFNO1lBQ04sTUFBTTtZQUNOLFVBQVU7WUFDVixXQUFXO1lBQ1gsVUFBVTtZQUNWLFdBQVc7WUFDWCxVQUFVO1lBQ1YsV0FBVztZQUNYLGFBQWE7WUFFYixVQUFVO1lBQ1YsT0FBTztZQUNQLFdBQVc7WUFDWCxTQUFTO1lBQ1QsT0FBTztZQUVQLFdBQVc7WUFDWCxRQUFRO1lBQ1IsUUFBUTtZQUNSLFlBQVk7WUFDWixTQUFTO1lBQ1QsYUFBYTtZQUNiLE9BQU87WUFDUCxTQUFT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