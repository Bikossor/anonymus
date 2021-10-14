import { create } from "../dist/anonymus";

test(`create() => An array including a string matching 2 words seperated by a space`, () => {
  var testResult = create();

  expect(testResult.length).toBe(1);

  expect(testResult[0]).toMatch(/^\w+\s\w+$/);
});

test(`create("1") => Should throw an error`, () => {
  expect(() => {
    // @ts-expect-error
    create("1");
  }).toThrow();
});

test(`create(Infinity) => Should throw an error`, () => {
  expect(() => {
    create(Infinity);
  }).toThrow();
});

test(`create(1) => An array including 1 string matching 2 words seperated by a space`, () => {
  var testResult = create(1);

  testResult.forEach((entry) => {
    expect(entry).toMatch(/^\w+\s\w+$/);
  });

  expect(testResult.length).toBe(1);
});

test(`create(10) => An array including 10 strings mathing 2 words seperated by a space`, () => {
  var testResult = create(10);

  testResult.forEach((entry) => {
    expect(entry).toMatch(/^\w+\s\w+$/);
  });

  expect(testResult.length).toBe(10);
});
