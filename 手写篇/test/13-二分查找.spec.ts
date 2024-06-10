import { describe, expect, test } from 'vitest'
import { binarySearch } from '../13-二分查找'

describe('二分查找', () => {
  test('default',()=>{
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(4)
  })
})
