import { test } from '@japa/runner';
import type { TestContext } from '@japa/core';

function sum(a: number, b: number) {
  return a + b
}

test('add two numbers', ({ assert }: TestContext) => {
  assert.equal(sum(2, 2), 4)
})
