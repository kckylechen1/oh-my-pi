# Edit Benchmark Report

## Configuration

| Setting | Value |
|---------|-------|
| Date | 2026-02-16T07:40:07.370Z |
| Model | openrouter/openrouter/openai/gpt-5.1-codex-mini |
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
| Successful Runs | 37 |
| **Task Success Rate** | **61.7% (37/60)** |
| Verified Rate | 61.7% (37/60) |
| Edit Tool Usage Rate | 80.0% (48/60) |
| **Edit Success Rate** | **98.1%** |
| Timeout Runs | 0 |
| Mutation Intent Match Rate | 89.6% |
| Patch Failure Rate | 1.9% (1/52) |
| Tasks All Passing | 37 |
| Tasks Flaky/Failing | 23 |

### Tool Calls

| Tool | Total | Avg/Run |
|------|-------|---------|
| Read | 241 | 4.0 |
| Edit | 52 | 0.9 |
| Write | 0 | 0.0 |
| **Tool Input Chars** | 20,014 | 334 |

### Tokens & Time

| Metric | Total | Avg/Run |
|--------|-------|---------|
| Input Tokens | 881,842 | 14,697 |
| Output Tokens | 537,249 | 8,954 |
| Total Tokens | 4,507,475 | 75,125 |
| Duration | 7795.2s | 129.9s |
| **Avg Indent Score** | — | **1.91** |

### Hashline Edit Subtypes

| Operation | Count | % |
|-----------|-------|---|
| set_line | 54 | 93.1% |
| replace_lines | 2 | 3.4% |
| insert_after | 2 | 3.4% |
| replace | 0 | 0.0% |
| **Total** | **58** | 100% |

## Task Results

| Task | File | Success | Edit Hit | R/E/W | Tokens (In/Out) | Time | Indent |
|------|------|---------|----------|-------|-----------------|------|--------|
| Access Remove Optional Chain 001 | registerDevToolsEventLogger.js | 1/1 ✅ | 100.0% | 2/1/0 | 6,481/2,260 | 11.2s | 1.00 |
| Access Remove Optional Chain 002 | TimelineContext.js | 1/1 ✅ | 100.0% | 2/1/0 | 11,227/1,712 | 10.9s | 1.29 |
| Access Remove Optional Chain 003 | astUtils.js | 1/1 ✅ | 100.0% | 3/1/0 | 17,845/36,871 | 226.2s | 4.85 |
| Call Swap Call Args 001 | testHelpers.js | 1/1 ✅ | 100.0% | 4/1/0 | 6,431/4,028 | 17.3s | 1.33 |
| Call Swap Call Args 002 | FlamegraphChartBuilder.js | 0/1 ❌ | 100.0% | 9/2/0 | 55,676/16,130 | 172.4s | 3.79 |
| Call Swap Call Args 003 | SyntheticEvent.js | 1/1 ✅ | 100.0% | 1/1/0 | 10,435/6,822 | 22.2s | 3.76 |
| Duplicate Duplicate Line Flip 001 | index.js | 1/1 ✅ | 100.0% | 2/1/0 | 5,893/336 | 5.3s | 0.00 |
| Duplicate Duplicate Line Flip 002 | ActivityList.js | 1/1 ✅ | 100.0% | 4/1/0 | 21,435/2,121 | 18.2s | 3.61 |
| Duplicate Duplicate Line Flip 003 | SyntheticEvent.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 361.1s | 0.00 |
| Identifier Identifier Multi Edit 001 | TabBar.js | 0/1 ❌ | 100.0% | 6/1/0 | 22,227/7,379 | 32.0s | 3.33 |
| Identifier Identifier Multi Edit 002 | EventPluginRegistry.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 360.0s | 0.00 |
| Identifier Identifier Multi Edit 003 | ReactPerformanceTrackProperties.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 360.0s | 0.00 |
| Import Swap Named Imports 001 | CommitFlamegraphListItem.js | 1/1 ✅ | 100.0% | 2/1/0 | 6,531/1,605 | 9.2s | 2.86 |
| Import Swap Named Imports 002 | ReactDOMTextarea.js | 1/1 ✅ | 100.0% | 2/1/0 | 7,373/1,546 | 9.5s | 2.41 |
| Import Swap Named Imports 003 | StyleEditor.js | 1/1 ✅ | 100.0% | 15/1/0 | 33,457/29,634 | 103.6s | 1.31 |
| Literal Flip Boolean 001 | testHelpers.js | 1/1 ✅ | 100.0% | 2/1/0 | 3,543/516 | 5.9s | 1.43 |
| Literal Flip Boolean 002 | ReactNoopFlightServer.js | 1/1 ✅ | 100.0% | 7/1/0 | 9,746/4,397 | 25.6s | 1.11 |
| Literal Flip Boolean 003 | ReactFlightDOMClientEdge.js | 1/1 ✅ | 100.0% | 2/1/0 | 4,269/4,366 | 137.5s | 3.51 |
| Literal Off By One 001 | githubAPI.js | 1/1 ✅ | 100.0% | 2/1/0 | 5,404/712 | 8.8s | 0.67 |
| Literal Off By One 002 | code-path.js | 1/1 ✅ | 100.0% | 1/1/0 | 2,254/15,559 | 136.1s | 3.50 |
| Literal Off By One 003 | InspectedElement.js | 1/1 ✅ | 100.0% | 10/1/0 | 55,169/9,232 | 45.0s | 3.60 |
| Operator Remove Negation 001 | ReactDOMClient.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 360.0s | 0.00 |
| Operator Remove Negation 002 | NativeEventsView.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 361.2s | 0.00 |
| Operator Remove Negation 003 | ReactFlightUnbundledReferences.js | 0/1 ❌ | 100.0% | 0/0/0 | 7,519/64,000 | 439.9s | 0.00 |
| Operator Swap Arithmetic 001 | fallbackEvalContext.js | 1/1 ✅ | 100.0% | 8/1/0 | 8,289/8,957 | 37.2s | 0.00 |
| Operator Swap Arithmetic 002 | CSSShorthandProperty.js | 1/1 ✅ | 100.0% | 6/1/0 | 35,039/43,100 | 337.1s | 2.88 |
| Operator Swap Arithmetic 003 | hooks.js | 0/1 ❌ | 100.0% | 0/1/0 | 13,239/10,406 | 127.7s | 0.00 |
| Operator Swap Comparison 001 | index.js | 1/1 ✅ | 100.0% | 3/1/0 | 7,189/791 | 8.2s | 0.00 |
| Operator Swap Comparison 002 | ReactFlightDOMServerBrowser.js | 1/1 ✅ | 100.0% | 2/1/0 | 5,939/2,225 | 10.4s | 1.57 |
| Operator Swap Comparison 003 | ReactFlightDOMServerNode.js | 1/1 ✅ | 100.0% | 11/1/0 | 52,371/9,888 | 50.4s | 1.95 |
| Operator Swap Equality 001 | readInputData.js | 1/1 ✅ | 100.0% | 3/1/0 | 6,013/556 | 8.7s | 0.00 |
| Operator Swap Equality 002 | editor.js | 1/1 ✅ | 100.0% | 3/1/0 | 11,130/1,062 | 9.0s | 0.00 |
| Operator Swap Equality 003 | hooks.js | 1/1 ✅ | 100.0% | 12/1/0 | 30,596/8,501 | 39.1s | 2.25 |
| Operator Swap Increment Decrement 001 | ReactFlightDOMClientNode.js | 1/1 ✅ | 100.0% | 3/1/0 | 9,436/915 | 8.2s | 1.52 |
| Operator Swap Increment Decrement 002 | ReactFlightDOMClientNode.js | 1/1 ✅ | 100.0% | 6/1/0 | 10,387/1,823 | 15.2s | 1.92 |
| Operator Swap Increment Decrement 003 | loadSourceAndMetadata.js | 0/1 ❌ | 100.0% | 8/1/0 | 29,042/6,339 | 31.5s | 0.00 |
| Operator Swap Logical 001 | profiling.js | 1/1 ✅ | 100.0% | 2/1/0 | 2,981/711 | 6.5s | 0.00 |
| Operator Swap Logical 002 | SourceMapMetadataConsumer.js | 1/1 ✅ | 100.0% | 7/1/0 | 16,529/13,031 | 48.1s | 3.14 |
| Operator Swap Logical 003 | DevToolsFiberComponentStack.js | 1/1 ✅ | 100.0% | 9/1/0 | 53,591/20,960 | 202.2s | 4.13 |
| Operator Swap Nullish 001 | getBatchRange.js | 1/1 ✅ | 100.0% | 1/1/0 | 8,294/406 | 6.1s | 1.33 |
| Operator Swap Nullish 002 | EnterLeaveEventPlugin.js | 1/1 ✅ | 100.0% | 5/1/0 | 20,104/26,929 | 148.0s | 1.56 |
| Operator Swap Nullish 003 | backend.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 360.0s | 0.00 |
| Regex Swap Regex Quantifier 001 | githubAPI.js | 1/1 ✅ | 100.0% | 2/1/0 | 7,422/240 | 5.5s | 0.67 |
| Regex Swap Regex Quantifier 002 | ReactFlightStackConfigV8.js | 1/1 ✅ | 100.0% | 8/1/0 | 35,226/19,543 | 74.1s | 3.06 |
| Regex Swap Regex Quantifier 003 | utils.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 360.0s | 0.00 |
| Structural Delete Statement 001 | UnsupportedVersionDialog.js | 0/1 ❌ | 100.0% | 9/1/0 | 11,756/2,074 | 19.2s | 6.22 |
| Structural Delete Statement 002 | getComponentNameFromFiber.js | 0/1 ❌ | 100.0% | 14/1/0 | 43,479/10,466 | 56.2s | 0.62 |
| Structural Delete Statement 003 | simulateBrowserEventDispatch.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 360.0s | 0.00 |
| Structural Remove Early Return 001 | InspectedElementStateTree.js | 0/1 ❌ | 0.0% | 0/1/0 | 1,330/32,000 | 295.5s | 0.67 |
| Structural Remove Early Return 002 | useCommitFilteringAndNavigation.js | 0/1 ❌ | 100.0% | 2/0/0 | 6,320/12,496 | 381.5s | 0.00 |
| Structural Remove Early Return 003 | ReactFiberAsyncAction.js | 0/1 ❌ | 100.0% | 20/1/0 | 107,802/23,589 | 338.0s | 1.46 |
| Structural Swap Adjacent Lines 001 | ReactServerConsoleConfigPlain.js | 1/1 ✅ | 100.0% | 2/1/0 | 7,544/2,750 | 16.0s | 1.00 |
| Structural Swap Adjacent Lines 002 | ReactNoopFlightServer.js | 1/1 ✅ | 100.0% | 3/2/0 | 11,334/37,614 | 343.6s | 1.11 |
| Structural Swap Adjacent Lines 003 | backend.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 360.0s | 0.00 |
| Structural Swap If Else 001 | importFile.js | 0/1 ❌ | 100.0% | 2/1/0 | 6,468/8,710 | 36.9s | 0.00 |
| Structural Swap If Else 002 | ReactNativeFiberInspector.js | 0/1 ❌ | 100.0% | 2/2/0 | 7,614/15,396 | 50.9s | 3.18 |
| Structural Swap If Else 003 | ReactDOMFizzStaticNode.js | 0/1 ❌ | 100.0% | 0/0/0 | 0/0 | 360.0s | 0.00 |
| Unicode Unicode Hyphen 001 | Rectangle.js | 1/1 ✅ | 100.0% | 2/1/0 | 5,997/585 | 6.0s | 3.00 |
| Unicode Unicode Hyphen 002 | UnsupportedBridgeProtocolDialog.js | 1/1 ✅ | 100.0% | 2/1/0 | 7,437/276 | 5.2s | 3.83 |
| Unicode Unicode Hyphen 003 | ReactTypes.js | 0/1 ❌ | 100.0% | 8/2/0 | 9,029/5,684 | 33.7s | 1.24 |

## Category Summary

| Category | Runs | Verified | Edit Used | Success | Min/Avg/Max Difficulty |
|----------|------|----------|-----------|---------|------------------------|
| access | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 7 / 8.7 / 10 |
| call | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) | 6 / 7.7 / 10 |
| duplicate | 3 | 66.7% (2/3) | 66.7% (2/3) | 66.7% (2/3) | 7 / 9.7 / 12 |
| identifier | 3 | 0.0% (0/3) | 33.3% (1/3) | 0.0% (0/3) | 6 / 9.3 / 14 |
| import | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 2 / 4.7 / 6 |
| literal | 6 | 100.0% (6/6) | 100.0% (6/6) | 100.0% (6/6) | 4 / 6.2 / 9 |
| operator | 21 | 71.4% (15/21) | 81.0% (17/21) | 71.4% (15/21) | 1 / 6.5 / 13 |
| regex | 3 | 66.7% (2/3) | 66.7% (2/3) | 66.7% (2/3) | 6 / 7.3 / 8 |
| structural | 12 | 16.7% (2/12) | 66.7% (8/12) | 16.7% (2/12) | 4 / 7.6 / 15 |
| unicode | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) | 1 / 3.0 / 6 |

## Mutation Summary

| Mutation | Category | Runs | Verified | Edit Used | Success |
|----------|----------|------|----------|-----------|---------|
| delete-statement | structural | 3 | 0.0% (0/3) | 66.7% (2/3) | 0.0% (0/3) |
| duplicate-line-flip | duplicate | 3 | 66.7% (2/3) | 66.7% (2/3) | 66.7% (2/3) |
| flip-boolean | literal | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| identifier-multi-edit | identifier | 3 | 0.0% (0/3) | 33.3% (1/3) | 0.0% (0/3) |
| off-by-one | literal | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| remove-early-return | structural | 3 | 0.0% (0/3) | 66.7% (2/3) | 0.0% (0/3) |
| remove-negation | operator | 3 | 0.0% (0/3) | 0.0% (0/3) | 0.0% (0/3) |
| remove-optional-chain | access | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-adjacent-lines | structural | 3 | 66.7% (2/3) | 66.7% (2/3) | 66.7% (2/3) |
| swap-arithmetic | operator | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| swap-call-args | call | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| swap-comparison | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-equality | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-if-else | structural | 3 | 0.0% (0/3) | 66.7% (2/3) | 0.0% (0/3) |
| swap-increment-decrement | operator | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| swap-logical | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-named-imports | import | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-nullish | operator | 3 | 66.7% (2/3) | 66.7% (2/3) | 66.7% (2/3) |
| swap-regex-quantifier | regex | 3 | 66.7% (2/3) | 66.7% (2/3) | 66.7% (2/3) |
| unicode-hyphen | unicode | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |

## Difficulty Summary

| Difficulty Score | Runs | Verified | Edit Used | Success |
|------------------|------|----------|-----------|---------|
| 0-2 | 6 | 83.3% (5/6) | 83.3% (5/6) | 83.3% (5/6) |
| 3-5 | 12 | 66.7% (8/12) | 91.7% (11/12) | 66.7% (8/12) |
| 6-8 | 24 | 62.5% (15/24) | 87.5% (21/24) | 62.5% (15/24) |
| 9+ | 18 | 50.0% (9/18) | 61.1% (11/18) | 50.0% (9/18) |

## Edit Tool Errors

Failures where the edit tool returned an error or failed to apply the patch.

### Structural Remove Early Return 001 (InspectedElementStateTree.js)

#### Run 1

##### Attempt 1

- Path: InspectedElementStateTree.js
- Operation: —

**Tool error**

```
Tool execution failed due to an error.
```

**Patch args**

```diff
{
  "path": "InspectedElementStateTree.js",
  "edits": [
    {
      "set_line": {
        "anchor": "40踒",
        "new_text": "if (state == null) {",
        "}},{": "state"
      }
    }
  ]
}
```

## Failed Tasks (0% passing)

### Call Swap Call Args 002 (FlamegraphChartBuilder.js) — 0/1

**All runs failed with same error:** File mismatch for FlamegraphChartBuilder.js

**Sample agent response (run 1):**
```
Read entire file first; edit only requested line.
```

**Diff (expected vs actual):**
```diff
@@ -45 @@
   profilerStore: ProfilerStore,
   rootID: number,
 }): ChartData {
-  const commitDatum = profilerStore.getCommitData(rootID, commitIndex);
+  const commitDatum = profilerStore.getCommitData(commitIndex, rootID);
 
   const { fiberActualDurations, fiberSelfDurations } = commitDatum;
   const { nodes } = commitTree;
```

### Duplicate Duplicate Line Flip 003 (SyntheticEvent.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 361.1s |

### Identifier Identifier Multi Edit 001 (TabBar.js) — 0/1

**All runs failed with same error:** File mismatch for TabBar.js

**Sample agent response (run 1):**
```
Changed the destructured property and its usage inside the tab loop so that the tab identifier consistently uses `id` instead of the misspelled `di`. No tests run; verify by running the relevant suite if needed.
```

**Diff (expected vs actual):**
```diff
@@ -17 @@
 import type { IconType } from './Icon';
 
 type TabInfo = {
-  icon: IconType,
   id: string,
   id: string,
+  di: string,
   label: string,
   title?: string,
 };
```

### Identifier Identifier Multi Edit 002 (EventPluginRegistry.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 360.0s |

### Identifier Identifier Multi Edit 003 (ReactPerformanceTrackProperties.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 360.0s |

### Operator Remove Negation 001 (ReactDOMClient.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 360.0s |

### Operator Remove Negation 002 (NativeEventsView.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 361.2s |

### Operator Remove Negation 003 (ReactFlightUnbundledReferences.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 7,519 / 64,000 | 439.9s |

### Operator Swap Arithmetic 003 (hooks.js) — 0/1

**All runs failed with same error:** File mismatch for hooks.js

**Sample agent response (run 1):**
```
Change the comparison at line 129 so overflow is detected when the container width is strictly less than `totalChildWidth` (uses `<` instead of `<=`).
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
@@ -16 @@
   useSyncExternalStore,
   useContext,
 } from 'react';
-import { localStorageGetItem, localStorageSetItem } from 'react-devtools-shared/src/storage';
-import { StoreContext, BridgeContext } from './context';
-import { sanitizeForParse, smartParse, smartStringify } from '../utils';
+import {
+  localStorageGetItem,
+  localStorageSetItem,
+} from 'react-devtools-shared/src/storage';
+import {StoreContext, BridgeContext} from './context';
+import {sanitizeForParse, smartParse, smartStringify} from '../utils';
 
 type ACTION_RESET = {
   type: 'RESET',
@@ -40 @@
   parsedValue: any,
 };
 
-function useEditableValueReducer(state: UseEditableValueState, action: UseEditableValueAction) {
+function useEditableValueReducer(
+  state: UseEditableValueState,
+  action: UseEditableValueAction,
+) {
   switch (action.type) {
     case 'RESET':
       return {
@@ -62 @@
         ...state,
         editableValue: sanitizeForParse(action.editableValue),
         externalValue: action.externalValue,
-        hasPendingChanges: smartStringify(action.externalValue) !== action.editableValue,
+        hasPendingChanges:
+          smartStringify(action.externalValue) !== action.editableValue,
         isValid: isNewValueValid,
         parsedValue: isNewValueValid ? newParsedValue : state.parsedValue,
       };
@@ -105 @@
 }
 
 export function useIsOverflowing(
-  containerRef: { current: HTMLDivElement | null, ... },
+  containerRef: {current: HTMLDivElement | null, ...},
   totalChildWidth: number,
 ): boolean {
   const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
@@ -118 @@
 
     const container = ((containerRef.current: any): HTMLDivElement);
 
-    const handleResize = () => se...
```

### Operator Swap Increment Decrement 003 (loadSourceAndMetadata.js) — 0/1

**All runs failed with same error:** File mismatch for loadSourceAndMetadata.js

**Sample agent response (run 1):**
```
Changed loop in `flattenHooksListImpl` to increment `i`, correcting the off-by-one bug.
```

**Diff (expected vs actual):**
```diff
@@ -45 @@
 //       This is the fastest option since our custom metadata file is much smaller than a full source map,
 //       and there is no need to convert runtime code to the original source.
 
-import { __DEBUG__ } from 'react-devtools-shared/src/constants';
-import { getHookSourceLocationKey } from 'react-devtools-shared/src/hookSourceLocation';
-import { sourceMapIncludesSource } from '../SourceMapUtils';
+import {__DEBUG__} from 'react-devtools-shared/src/constants';
+import {getHookSourceLocationKey} from 'react-devtools-shared/src/hookSourceLocation';
+import {sourceMapIncludesSource} from '../SourceMapUtils';
 import {
   withAsyncPerfMeasurements,
   withCallbackPerfMeasurements,
@@ -54 @@
   withSyncPerfMeasurements,
 } from 'react-devtools-shared/src/PerformanceLoggingUtils';
 
-import type { HooksNode, HookSource, HooksTree } from 'react-debug-tools/src/ReactDebugHooks';
-import type { MixedSourceMap } from '../SourceMapTypes';
-import type { FetchFileWithCaching } from 'react-devtools-shared/src/devtools/views/Components/FetchFileWithCachingContext';
+import type {
+  HooksNode,
+  HookSource,
+  HooksTree,
+} from 'react-debug-tools/src/ReactDebugHooks';
+import type {MixedSourceMap} from '../SourceMapTypes';
+import type {FetchFileWithCaching} from 'react-devtools-shared/src/devtools/views/Components/FetchFileWithCachingContext';
 
 // Prefer a cached albeit stale response to reduce download time.
 // We wouldn't want to load/parse a newer version of the source (even if one existed).
 
 // Prefer a cached albeit stale response to reduce download time.
 // We wouldn't want to load/parse a newer version of the source (even if one existed).
-const FETCH_OPTIONS = { cache: 'force-cache' as CacheType };
+const FETCH_OPTIONS = {cache: 'force-cache' as CacheType};
 
 const MAX_SOURCE_LENGTH = 100_000_000;
 
@@ -84 @@
   sourceMapURL: string | null,
 };
 
-export type LocationKeyToHookSourceAndMetadata = Map<string, HookSourceAndMetadata>;
+export type...
```

### Operator Swap Nullish 003 (backend.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 360.0s |

### Regex Swap Regex Quantifier 003 (utils.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 360.0s |

### Structural Delete Statement 001 (UnsupportedVersionDialog.js) — 0/1

**All runs failed with same error:** File mismatch for UnsupportedVersionDialog.js

**Sample agent response (run 1):**
```
Added the missing `StoreContext` usage so the dialog effect can access the store state and listeners; the original structure is otherwise unchanged.
```

**Diff (expected vs actual):**
```diff
@@ -20 @@
 export default function UnsupportedVersionDialog(_: {}): null {
   const { dispatch } = useContext(ModalDialogContext);
   const store = useContext(StoreContext);
+
   const [state, setState] = useState<DAILOG_STATE>('dialog-not-shown');
 
   useEffect(() => {
```

### Structural Delete Statement 002 (getComponentNameFromFiber.js) — 0/1

**All runs failed with same error:** File mismatch for getComponentNameFromFiber.js

**Sample agent response (run 1):**
```
Restored the missing `functionName` derivation inside `getWrappedName` so it can correctly fall back to the wrapped inner type’s display name or function name before defaulting to `wrapperName`.
```

**Diff (expected vs actual):**
```diff
@@ -55 @@
 // Keep in sync with shared/getComponentNameFromType
 function getWrappedName(outerType: mixed, innerType: any, wrapperName: string): string {
   const functionName = innerType.displayName || innerType.name || '';
+
   return (
     (outerType: any).displayName ||
     (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName)
```

### Structural Delete Statement 003 (simulateBrowserEventDispatch.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 360.0s |

### Structural Remove Early Return 001 (InspectedElementStateTree.js) — 0/1

**All runs failed with same error:** File mismatch for InspectedElementStateTree.js

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

### Structural Remove Early Return 002 (useCommitFilteringAndNavigation.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 6,320 / 12,496 | 381.5s |

**Sample agent response (run 1):**
```
Restored the early-return guard in `findFilteredIndex` so it now exits with the matching filtered index when `commitIndex` is present, keeping the selected commit intact when filters change.  
Tests not run (not requested).
```

### Structural Remove Early Return 003 (ReactFiberAsyncAction.js) — 0/1

**All runs failed with same error:** File mismatch for ReactFiberAsyncAction.js

**Sample agent response (run 1):**
```
Added the guard clause back to `registerDefaultIndicator` so it exits early when `enableDefaultTransitionIndicator` is disabled, matching the expected behavior before the removed early return.
```

**Diff (expected vs actual):**
```diff
@@ -179 @@
   if (!enableDefaultTransitionIndicator) {
     return;
   }
+
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
Changed the catch clause to use the negated condition so the SUCCESS/FAILURE responses match their intended branches while leaving all other code untouched.
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
In `getInspectorDataForViewTag`, swapped the Dev/production branches so production throws and dev path fetches the inspector data with the negated condition.
```

**Diff (expected vs actual):**
```diff
@@ -145 @@
 }
 
 function getInspectorDataForViewTag(viewTag: number): InspectorData {
-  if (__DEV__) {
+  if (!__DEV__) {
     const closestInstance = getClosestInstanceFromNode(viewTag);
     return getInspectorDataForInstance(closestInstance);
   } else {
```

### Structural Swap If Else 003 (ReactDOMFizzStaticNode.js) — 0/1

| Run | Status | Error | Tokens (in/out) | Time |
|-----|--------|-------|-----------------|------|
| 1 | ❌ | — | 0 / 0 | 360.0s |

### Unicode Unicode Hyphen 003 (ReactTypes.js) — 0/1

**All runs failed with same error:** File mismatch for ReactTypes.js

**Sample agent response (run 1):**
```
Normalized `revealOrder` literal by replacing the lookalike en-dash with a standard ASCII hyphen so the option name now reads `unstable_legacy-backwards`.
```

**Diff (expected vs actual):**
```diff
@@ -335 @@
   // It does not allow a single element child.
   children?: Iterable<SuspenseListRow> | AsyncIterable<SuspenseListRow>, // Note: AsyncIterable is experimental.
   revealOrder: 'forwards' | 'backwards' | 'unstable_legacy-backwards',
+
   tail?: SuspenseListTailMode,
 };
 
```
