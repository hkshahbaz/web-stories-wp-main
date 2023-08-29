/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */
import translateToInclusiveList from '../translateToInclusiveList';

describe('translateToInclusiveList', () => {
  it.each([
    [[], ''],
    [['one'], 'one'],
    [['doctor', 'barnacle'], 'doctor and barnacle'],
    [
      ['apple', 'banana', 'mango', 'dragonfruit'],
      'apple, banana, mango, and dragonfruit',
    ],
  ])('should translate as expected', (options, result) => {
    expect(translateToInclusiveList(options)).toBe(result);
  });
});
