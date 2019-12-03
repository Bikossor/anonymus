declare var anonymus: {
    /**
     * List of colors `anonymus` will use
     */
    readonly colors: string[];
    /**
     * List of animals `anonymus` will use
     */
    readonly animals: string[];
    /**
     * Number of entries of `anonymus.colors`
     */
    readonly sizeColors: any;
    /**
     * Number of entries of `anonymus.animals`
     */
    readonly sizeAnimals: any;
    /**
     * Number of unique entries `anonymus` can generate
     */
    readonly sizeMax: number;
    /**
     * Returns a random color
     */
    readonly randomColor: any;
    /**
     * Returns a random animal
     */
    readonly randomAnimal: any;
    /**
     * Returns the current version of `anonymus`
     */
    readonly version: string;
    /**
     * Generates one or more unique names
     */
    create: (amount: any) => string | any[];
};
