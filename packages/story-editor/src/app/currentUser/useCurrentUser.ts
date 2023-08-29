/*
 * Copyright 2020 Google LLC
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
 * External dependencies
 */
import { identity, useContextSelector } from '@googleforcreators/react';
/**
 * Internal dependencies
 */
import type { CurrentUserState } from '../../types/currentUserProvider';
import Context from './context';

function useCurrentUser(): CurrentUserState;
function useCurrentUser<T>(selector: (state: CurrentUserState) => T): T;
function useCurrentUser<T>(
  selector: (state: CurrentUserState) => T | CurrentUserState = identity
) {
  return useContextSelector(Context, selector);
}

export default useCurrentUser;