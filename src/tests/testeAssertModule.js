import { strictEqual } from 'assert';
import { sum, subtract } from '../math.js';

let result, expected;

result = sum(3, 7);
expected = 10;

strictEqual(result, expected);
result = subtract(7, 3);
expected = 4;
strictEqual(result, expected);
