import { functionOne } from "../home/example";

describe("Example", () => {
  it("can run functionOne", () => {
    // Given
    const one = 1;

    // When
    const actual = functionOne();

    // Then
    expect(actual).toEqual(1);
  });
});
