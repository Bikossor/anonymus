/**
 * List of colors `anonymus` will use
 */
export const colors = [
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
  "Rainbow",
];

/**
 * List of animals `anonymus` will use
 */
export const animals = [
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
  "zebra",
];

/**
 * Number of entries of `anonymus.colors`
 */
export const sizeColors = colors.length;

/**
 * Number of entries of `anonymus.animals`
 */
export const sizeAnimals = animals.length;

/**
 * Number of unique entries `anonymus` can generate
 */
export const sizeMax = sizeColors * sizeAnimals;

/**
 * Returns a random color
 */
export const randomColor = () => colors[Math.floor(Math.random() * sizeColors)];

/**
 * Returns a random animal
 */
export const randomAnimal = () =>
  animals[Math.floor(Math.random() * sizeAnimals)];

/**
 * Returns the current version of `anonymus`
 */
export const version = [2, 0, 0].join(".");

/**
 * Generates one or more unique names
 */
export const create = (amount: number = 1) => {

    if (!Number.isInteger(amount)) {
      throw new Error("Amount has to be an integer!");
    }

    if (amount > sizeMax) {
      throw new Error("Amount cannot exceed 'anonymus.maxSize'!");
    }

    var result: Array<string> = [],
      tmp: string;

    for (var i = 0; i < amount; i++) {
      tmp = randomColor() + " " + randomAnimal();

      while (result.includes(tmp)) {
        tmp = randomColor() + " " + randomAnimal();
      }

      result.push(tmp);
    }

    return result;
};
