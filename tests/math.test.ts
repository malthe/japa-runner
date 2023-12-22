import { test } from '@japa/runner';

function sum(a: number, b: number) {
  return a + b
}

test('add two numbers', ({ assert }) => {
  assert.equal(sum(2, 2), 4)
});
