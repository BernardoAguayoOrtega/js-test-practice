import { sum, subtract } from '../math.js';

let result, expected;

result = sum(3, 7);
expected = 100;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 100;
expect(result).toBe(expected);

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`${actual} is not equal to ${expected}`);
			}
		},
	};
}
