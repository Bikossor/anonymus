const anonymus = require('../dist/anonymus');

test(`create() => A string matching 2 words seperated by a space`, () => {
    expect(
        anonymus.create()
    ).toMatch(/^\w+\s\w+$/);
});

test(`create("1") => An array including 1 string`, () => {
    var testResult = anonymus.create("1");

    testResult.forEach((entry) => {
        expect(entry).toMatch(/^\w+\s\w+$/);
    });

    expect(testResult.length).toBe(1);
});

test(`create(Infinity) => Should throw an error`, () => {
    expect(() => {
        anonymus.create(Infinity)
    }).toThrow();
});

test(`create(1) => An array including 1 string matching 2 words seperated by a space`, () => {
    var testResult = anonymus.create(1);

    testResult.forEach((entry) => {
        expect(entry).toMatch(/^\w+\s\w+$/);
    });

    expect(testResult.length).toBe(1);
});

test(`create(10) => An array including 10 strings mathing 2 words seperated by a space`, () => {
    var testResult = anonymus.create(10);

    testResult.forEach((entry) => {
        expect(entry).toMatch(/^\w+\s\w+$/);
    });

    expect(testResult.length).toBe(10);
});