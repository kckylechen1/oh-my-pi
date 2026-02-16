# Edit Benchmark Report

## Configuration

| Setting | Value |
|---------|-------|
| Date | 2026-02-16T07:58:33.022Z |
| Model | p-anthropic/p-anthropic/claude-opus-4-6 |
| Thinking Level | default |
| Runs per task | 1 |
| Edit Variant | hashline |
| Edit Fuzzy | auto |
| Edit Fuzzy Threshold | auto |
| Guided Mode | no |
| Max Attempts | 1 |
| No-op Retry Limit | 2 |
| Mutation Scope Window | 20 |
| Require Edit Tool | no |
| Require Read Tool | no |
| No-Edit Baseline | no |

## Summary

| Metric | Value |
|--------|-------|
| Total Tasks | 60 |
| Total Runs | 60 |
| Successful Runs | 51 |
| **Task Success Rate** | **85.0% (51/60)** |
| Verified Rate | 85.0% (51/60) |
| Edit Tool Usage Rate | 95.0% (57/60) |
| **Edit Success Rate** | **100.0%** |
| Timeout Runs | 0 |
| Mutation Intent Match Rate | 89.5% |
| Patch Failure Rate | 0.0% (0/58) |
| Tasks All Passing | 51 |
| Tasks Flaky/Failing | 9 |

### Tool Calls

| Tool | Total | Avg/Run |
|------|-------|---------|
| Read | 153 | 2.5 |
| Edit | 58 | 1.0 |
| Write | 0 | 0.0 |
| **Tool Input Chars** | 21,690 | 362 |

### Tokens & Time

| Metric | Total | Avg/Run |
|--------|-------|---------|
| Input Tokens | 378 | 6 |
| Output Tokens | 72,367 | 1,206 |
| Total Tokens | 2,654,213 | 44,237 |
| Duration | 2886.6s | 48.1s |
| **Avg Indent Score** | — | **2.23** |

### Hashline Edit Subtypes

| Operation | Count | % |
|-----------|-------|---|
| set_line | 61 | 89.7% |
| replace_lines | 2 | 2.9% |
| insert_after | 5 | 7.4% |
| replace | 0 | 0.0% |
| **Total** | **68** | 100% |

## Task Results

| Task | File | Success | Edit Hit | R/E/W | Tokens (In/Out) | Time | Indent |
|------|------|---------|----------|-------|-----------------|------|--------|
| Access Remove Optional Chain 001 | registerDevToolsEventLogger.js | 1/1 ✅ | 100.0% | 4/1/0 | 8/3,831 | 74.7s | 1.00 |
| Access Remove Optional Chain 002 | TimelineContext.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/791 | 20.0s | 1.29 |
| Access Remove Optional Chain 003 | astUtils.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,196 | 27.9s | 4.85 |
| Call Swap Call Args 001 | testHelpers.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/396 | 10.1s | 1.33 |
| Call Swap Call Args 002 | FlamegraphChartBuilder.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/547 | 13.5s | 3.79 |
| Call Swap Call Args 003 | SyntheticEvent.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,134 | 25.5s | 3.76 |
| Duplicate Duplicate Line Flip 001 | index.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/370 | 9.6s | 0.00 |
| Duplicate Duplicate Line Flip 002 | ActivityList.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/613 | 16.5s | 3.61 |
| Duplicate Duplicate Line Flip 003 | SyntheticEvent.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,287 | 29.3s | 1.02 |
| Identifier Identifier Multi Edit 001 | TabBar.js | 1/1 ✅ | 100.0% | 5/1/0 | 9/1,252 | 30.9s | 3.33 |
| Identifier Identifier Multi Edit 002 | EventPluginRegistry.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,167 | 27.9s | 3.94 |
| Identifier Identifier Multi Edit 003 | ReactPerformanceTrackProperties.js | 1/1 ✅ | 100.0% | 4/1/0 | 8/1,127 | 26.1s | 9.95 |
| Import Swap Named Imports 001 | CommitFlamegraphListItem.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/659 | 18.4s | 2.86 |
| Import Swap Named Imports 002 | ReactDOMTextarea.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,276 | 27.5s | 2.41 |
| Import Swap Named Imports 003 | StyleEditor.js | 0/1 ❌ | 100.0% | 3/1/0 | 7/4,110 | 78.4s | 1.31 |
| Literal Flip Boolean 001 | testHelpers.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/317 | 7.9s | 1.33 |
| Literal Flip Boolean 002 | ReactNoopFlightServer.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/416 | 11.8s | 1.11 |
| Literal Flip Boolean 003 | ReactFlightDOMClientEdge.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,249 | 29.9s | 3.58 |
| Literal Off By One 001 | githubAPI.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/421 | 13.1s | 0.67 |
| Literal Off By One 002 | code-path.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/1,399 | 32.0s | 3.50 |
| Literal Off By One 003 | InspectedElement.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,441 | 30.5s | 3.60 |
| Operator Remove Negation 001 | ReactDOMClient.js | 1/1 ✅ | 100.0% | 2/1/0 | 4/1,210 | 136.4s | 1.08 |
| Operator Remove Negation 002 | NativeEventsView.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/4,761 | 94.8s | 3.03 |
| Operator Remove Negation 003 | ReactFlightUnbundledReferences.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 360.0s | 0.00 |
| Operator Swap Arithmetic 001 | fallbackEvalContext.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/370 | 9.6s | 0.00 |
| Operator Swap Arithmetic 002 | CSSShorthandProperty.js | 1/1 ✅ | 100.0% | 4/1/0 | 8/1,329 | 33.5s | 2.88 |
| Operator Swap Arithmetic 003 | hooks.js | 0/1 ❌ | 100.0% | 3/1/0 | 7/3,634 | 75.1s | 2.25 |
| Operator Swap Comparison 001 | index.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/650 | 16.0s | 0.00 |
| Operator Swap Comparison 002 | ReactFlightDOMServerBrowser.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/664 | 16.7s | 1.57 |
| Operator Swap Comparison 003 | ReactFlightDOMServerNode.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,133 | 25.9s | 1.95 |
| Operator Swap Equality 001 | readInputData.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/361 | 10.2s | 0.00 |
| Operator Swap Equality 002 | editor.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/500 | 15.2s | 0.00 |
| Operator Swap Equality 003 | hooks.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/575 | 16.7s | 2.25 |
| Operator Swap Increment Decrement 001 | ReactFlightDOMClientNode.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/433 | 12.3s | 1.52 |
| Operator Swap Increment Decrement 002 | ReactFlightDOMClientNode.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/562 | 16.2s | 1.92 |
| Operator Swap Increment Decrement 003 | loadSourceAndMetadata.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/507 | 15.7s | 3.72 |
| Operator Swap Logical 001 | profiling.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/452 | 11.9s | 0.00 |
| Operator Swap Logical 002 | SourceMapMetadataConsumer.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/918 | 20.6s | 3.14 |
| Operator Swap Logical 003 | DevToolsFiberComponentStack.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,284 | 28.6s | 4.13 |
| Operator Swap Nullish 001 | getBatchRange.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/399 | 12.2s | 1.33 |
| Operator Swap Nullish 002 | EnterLeaveEventPlugin.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,322 | 29.7s | 1.56 |
| Operator Swap Nullish 003 | backend.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/2,051 | 39.3s | 3.15 |
| Regex Swap Regex Quantifier 001 | githubAPI.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/385 | 8.9s | 0.67 |
| Regex Swap Regex Quantifier 002 | ReactFlightStackConfigV8.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,202 | 29.1s | 3.06 |
| Regex Swap Regex Quantifier 003 | utils.js | 1/1 ✅ | 100.0% | 1/1/0 | 3/2,821 | 200.0s | 2.00 |
| Structural Delete Statement 001 | UnsupportedVersionDialog.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/756 | 17.8s | 6.22 |
| Structural Delete Statement 002 | getComponentNameFromFiber.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/608 | 14.7s | 0.62 |
| Structural Delete Statement 003 | simulateBrowserEventDispatch.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 361.2s | 0.00 |
| Structural Remove Early Return 001 | InspectedElementStateTree.js | 0/1 ❌ | 100.0% | 2/1/0 | 6/543 | 14.2s | 0.36 |
| Structural Remove Early Return 002 | useCommitFilteringAndNavigation.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/1,082 | 25.2s | 3.73 |
| Structural Remove Early Return 003 | ReactFiberAsyncAction.js | 0/1 ❌ | 100.0% | 4/2/0 | 9/5,730 | 93.2s | 1.46 |
| Structural Swap Adjacent Lines 001 | ReactServerConsoleConfigPlain.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/410 | 11.9s | 1.00 |
| Structural Swap Adjacent Lines 002 | ReactNoopFlightServer.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/578 | 13.8s | 1.11 |
| Structural Swap Adjacent Lines 003 | backend.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 360.0s | 0.00 |
| Structural Swap If Else 001 | importFile.js | 0/1 ❌ | 100.0% | 2/1/0 | 6/476 | 12.3s | 0.00 |
| Structural Swap If Else 002 | ReactNativeFiberInspector.js | 0/1 ❌ | 100.0% | 3/1/0 | 7/861 | 21.1s | 3.18 |
| Structural Swap If Else 003 | ReactDOMFizzStaticNode.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/7,216 | 104.1s | 1.88 |
| Unicode Unicode Hyphen 001 | Rectangle.js | 1/1 ✅ | 100.0% | 2/1/0 | 6/377 | 10.6s | 3.00 |
| Unicode Unicode Hyphen 002 | UnsupportedBridgeProtocolDialog.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/565 | 13.5s | 3.83 |
| Unicode Unicode Hyphen 003 | ReactTypes.js | 1/1 ✅ | 100.0% | 3/1/0 | 7/643 | 16.9s | 1.24 |

## Category Summary

| Category | Runs | Verified | Edit Used | Success | Min/Avg/Max Difficulty |
|----------|------|----------|-----------|---------|------------------------|
| access | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 7 / 8.7 / 10 |
| call | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 6 / 7.7 / 10 |
| duplicate | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 7 / 9.7 / 12 |
| identifier | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 6 / 9.3 / 14 |
| import | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) | 2 / 4.7 / 6 |
| literal | 6 | 100.0% (6/6) | 100.0% (6/6) | 100.0% (6/6) | 4 / 6.2 / 9 |
| operator | 21 | 90.5% (19/21) | 95.2% (20/21) | 90.5% (19/21) | 1 / 6.5 / 13 |
| regex | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 6 / 7.3 / 8 |
| structural | 12 | 50.0% (6/12) | 83.3% (10/12) | 50.0% (6/12) | 4 / 7.6 / 15 |
| unicode | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 1 / 3.0 / 6 |

## Mutation Summary

| Mutation | Category | Runs | Verified | Edit Used | Success |
|----------|----------|------|----------|-----------|---------|
| delete-statement | structural | 3 | 66.7% (2/3) | 66.7% (2/3) | 66.7% (2/3) |
| duplicate-line-flip | duplicate | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| flip-boolean | literal | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| identifier-multi-edit | identifier | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| off-by-one | literal | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| remove-early-return | structural | 3 | 33.3% (1/3) | 100.0% (3/3) | 33.3% (1/3) |
| remove-negation | operator | 3 | 66.7% (2/3) | 66.7% (2/3) | 66.7% (2/3) |
| remove-optional-chain | access | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-adjacent-lines | structural | 3 | 66.7% (2/3) | 66.7% (2/3) | 66.7% (2/3) |
| swap-arithmetic | operator | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| swap-call-args | call | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-comparison | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-equality | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-if-else | structural | 3 | 33.3% (1/3) | 100.0% (3/3) | 33.3% (1/3) |
| swap-increment-decrement | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-logical | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-named-imports | import | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| swap-nullish | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-regex-quantifier | regex | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| unicode-hyphen | unicode | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |

## Difficulty Summary

| Difficulty Score | Runs | Verified | Edit Used | Success |
|------------------|------|----------|-----------|---------|
| 0-2 | 6 | 100.0% (6/6) | 100.0% (6/6) | 100.0% (6/6) |
| 3-5 | 12 | 91.7% (11/12) | 100.0% (12/12) | 91.7% (11/12) |
| 6-8 | 24 | 83.3% (20/24) | 100.0% (24/24) | 83.3% (20/24) |
| 9+ | 18 | 77.8% (14/18) | 83.3% (15/18) | 77.8% (14/18) |

## Failed Tasks (0% passing)

### Import Swap Named Imports 003 (StyleEditor.js) — 0/1

**All runs failed with same error:** File mismatch for StyleEditor.js

**Sample agent response (run 1):**
```
The fix swaps `BridgeContext` and `StoreContext` back to their correct positions in the destructuring import on lines 14-15. No other lines were touched.
```

**Diff (expected vs actual):**
```diff
@@ -8 @@
  */
 
 import * as React from 'react';
-import { useContext, useMemo, useRef, useState } from 'react';
+import { useMemo, useContext, useRef, useState } from 'react';
 import { copy } from 'clipboard-js';
 import { copy } from 'clipboard-js';
-import { BridgeContext, StoreContext } from 'react-devtools-shared/src/devtools/views/context';
+import { StoreContext, BridgeContext } from 'react-devtools-shared/src/devtools/views/context';
 import Button from '../../Button';
 import ButtonIcon from '../../ButtonIcon';
 import { serializeDataForCopy } from '../../utils';
```

### Operator Remove Negation 003 (ReactFlightUnbundledReferences.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 360.0s |

### Operator Swap Arithmetic 003 (hooks.js) — 0/1

**All runs failed with same error:** File mismatch for hooks.js

**Sample agent response (run 1):**
```
Fix confirmed. Only the comparison operator on line 129 changed: `<=` → `<`. When `clientWidth` equals `totalChildWidth`, the content fits exactly and is not overflowing.
```

**Diff (expected vs actual):**
```diff
@@ -2 @@
  * Copyright (c) Meta Platforms, Inc. and affiliates.
  *
  * This source code is licensed under the MIT license found in the
- * LICENSE file in the root directory of this source tree.
+ / LICENSE file in the root directory of this source tree.
  *
  * @flow
  */
@@ -118 @@
 
     const container = ((containerRef.current: any): HTMLDivElement);
 
-    const handleResize = () => setIsOverflowing(container.clientWidth <= totalChildWidth);
+    const handleResize = () => setIsOverflowing(container.clientWidth < totalChildWidth);
 
     handleResize();
 
```

### Structural Delete Statement 003 (simulateBrowserEventDispatch.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 361.2s |

### Structural Remove Early Return 001 (InspectedElementStateTree.js) — 0/1

**All runs failed with same error:** File mismatch for InspectedElementStateTree.js

**Sample agent response (run 1):**
```
Guard clause restored. The 3-line pattern (`if (state == null) {`, `return null;`, `}`) is inserted after the destructuring on line 38, before the host component check — ensuring `Object.entries(state)` on line 46 won't throw on a null/undefined `state`.
```

**Diff (expected vs actual):**
```diff
@@ -36 @@
   store,
 }: Props): React.Node {
   const { state, type } = inspectedElement;
+
   if (state == null) {
     return null;
   }
```

### Structural Remove Early Return 003 (ReactFiberAsyncAction.js) — 0/1

**All runs failed with same error:** File mismatch for ReactFiberAsyncAction.js

**Sample agent response (run 1):**
```
The guard clause is now correctly placed at the top of `pingEngtangledActionScope`, before the decrement of `currentEntangledPendingCount`. This prevents decrementing when there's no active entangled scope (`currentEntangledListeners === null`), which would corrupt the counter into negative values and break subsequent async action scoping.
```

**Diff (expected vs actual):**
```diff
@@ -85 @@
 }
 
 function pingEngtangledActionScope() {
+  if (currentEntangledListeners === null) {
+    return;
+  }
   if (--currentEntangledPendingCount === 0) {
     if (enableProfilerTimer && enableComponentPerformanceTrack) {
       if (!hasScheduledTransitionWork()) {
@@ -176 @@
 export function registerDefaultIndicator(
   onDefaultTransitionIndicator: () => void | (() => void),
 ): void {
-  if (!enableDefaultTransitionIndicator) {
-    return;
-  }
   if (isomorphicDefaultTransitionIndicator === undefined) {
     isomorphicDefaultTransitionIndicator = onDefaultTransitionIndicator;
   } else if (isomorphicDefaultTransitionIndicator !== onDefaultTransitionIndicator) {
```

### Structural Swap Adjacent Lines 003 (backend.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 360.0s |

### Structural Swap If Else 001 (importFile.js) — 0/1

**All runs failed with same error:** File mismatch for importFile.js

**Sample agent response (run 1):**
```
Confirmed. Only line 34 changed: added `!( ... )` around the condition. Now when `error instanceof InvalidProfileError` is true, the else branch fires returning `INVALID_PROFILE_ERROR`, and non-`InvalidProfileError` errors hit the if branch returning `UNEXPECTED_ERROR`.
```

**Diff (expected vs actual):**
```diff
@@ -31 @@
       processedData,
     };
   } catch (error) {
-    if (error instanceof InvalidProfileError) {
+    if (!(error instanceof InvalidProfileError)) {
       return {
       return {
-        status: 'INVALID_PROFILE_ERROR',
+        status: 'UNEXPECTED_ERROR',
         error,
       };
     } else {
@@ -38 @@
       };
     } else {
       return {
-        status: 'UNEXPECTED_ERROR',
+        status: 'INVALID_PROFILE_ERROR',
         error,
       };
     }
```

### Structural Swap If Else 002 (ReactNativeFiberInspector.js) — 0/1

**All runs failed with same error:** File mismatch for ReactNativeFiberInspector.js

**Sample agent response (run 1):**
```
Fixed. The condition `if (__DEV__)` was negated to `if (!__DEV__)` so the error is thrown in production (not dev), and the actual inspector logic runs in dev mode — matching the error message and the intended behavior.
```

**Diff (expected vs actual):**
```diff
@@ -145 @@
 }
 
 function getInspectorDataForViewTag(viewTag: number): InspectorData {
-  if (__DEV__) {
+  if (!__DEV__) {
+    throw new Error('getInspectorDataForViewTag() is not available in production');
+  } else {
     const closestInstance = getClosestInstanceFromNode(viewTag);
     return getInspectorDataForInstance(closestInstance);
     const closestInstance = getClosestInstanceFromNode(viewTag);
     return getInspectorDataForInstance(closestInstance);
-  } else {
-    throw new Error('getInspectorDataForViewTag() is not available in production');
   }
 }
 
```
