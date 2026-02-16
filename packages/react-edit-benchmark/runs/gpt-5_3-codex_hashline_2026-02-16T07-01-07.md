# Edit Benchmark Report

## Configuration

| Setting | Value |
|---------|-------|
| Date | 2026-02-16T06:53:42.211Z |
| Model | openai-codex/openai-codex/gpt-5.3-codex |
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
| Successful Runs | 54 |
| **Task Success Rate** | **90.0% (54/60)** |
| Verified Rate | 90.0% (54/60) |
| Edit Tool Usage Rate | 100.0% (60/60) |
| **Edit Success Rate** | **100.0%** |
| Timeout Runs | 0 |
| Mutation Intent Match Rate | 90.0% |
| Patch Failure Rate | 0.0% (0/63) |
| Tasks All Passing | 54 |
| Tasks Flaky/Failing | 6 |

### Tool Calls

| Tool | Total | Avg/Run |
|------|-------|---------|
| Read | 184 | 3.1 |
| Edit | 63 | 1.1 |
| Write | 0 | 0.0 |
| **Tool Input Chars** | 17,167 | 286 |

### Tokens & Time

| Metric | Total | Avg/Run |
|--------|-------|---------|
| Input Tokens | 854,186 | 14,236 |
| Output Tokens | 95,374 | 1,590 |
| Total Tokens | 3,354,040 | 55,901 |
| Duration | 2379.6s | 39.7s |
| **Avg Indent Score** | — | **2.28** |

### Hashline Edit Subtypes

| Operation | Count | % |
|-----------|-------|---|
| set_line | 63 | 87.5% |
| replace_lines | 2 | 2.8% |
| insert_after | 5 | 6.9% |
| replace | 2 | 2.8% |
| **Total** | **72** | 100% |

## Task Results

| Task | File | Success | Edit Hit | R/E/W | Tokens (In/Out) | Time | Indent |
|------|------|---------|----------|-------|-----------------|------|--------|
| Access Remove Optional Chain 001 | registerDevToolsEventLogger.js | 1/1 ✅ | 100.0% | 3/1/0 | 8,973/2,755 | 47.1s | 1.00 |
| Access Remove Optional Chain 002 | TimelineContext.js | 1/1 ✅ | 100.0% | 2/1/0 | 10,695/374 | 7.3s | 1.29 |
| Access Remove Optional Chain 003 | astUtils.js | 1/1 ✅ | 100.0% | 3/1/0 | 19,443/1,484 | 26.7s | 4.85 |
| Call Swap Call Args 001 | testHelpers.js | 1/1 ✅ | 100.0% | 3/1/0 | 6,312/552 | 12.3s | 1.33 |
| Call Swap Call Args 002 | FlamegraphChartBuilder.js | 1/1 ✅ | 100.0% | 3/1/0 | 8,241/476 | 11.7s | 3.79 |
| Call Swap Call Args 003 | SyntheticEvent.js | 1/1 ✅ | 100.0% | 3/1/0 | 9,714/418 | 9.9s | 3.76 |
| Duplicate Duplicate Line Flip 001 | index.js | 1/1 ✅ | 100.0% | 2/1/0 | 6,582/291 | 7.4s | 0.00 |
| Duplicate Duplicate Line Flip 002 | ActivityList.js | 1/1 ✅ | 100.0% | 3/1/0 | 17,536/510 | 9.4s | 3.61 |
| Duplicate Duplicate Line Flip 003 | SyntheticEvent.js | 1/1 ✅ | 100.0% | 3/1/0 | 13,606/654 | 11.7s | 1.02 |
| Identifier Identifier Multi Edit 001 | TabBar.js | 1/1 ✅ | 100.0% | 4/1/0 | 4,237/950 | 17.8s | 3.33 |
| Identifier Identifier Multi Edit 002 | EventPluginRegistry.js | 1/1 ✅ | 100.0% | 3/1/0 | 9,628/1,069 | 20.6s | 3.94 |
| Identifier Identifier Multi Edit 003 | ReactPerformanceTrackProperties.js | 1/1 ✅ | 100.0% | 4/1/0 | 18,789/809 | 14.6s | 9.95 |
| Import Swap Named Imports 001 | CommitFlamegraphListItem.js | 1/1 ✅ | 100.0% | 2/1/0 | 12,462/420 | 11.1s | 2.86 |
| Import Swap Named Imports 002 | ReactDOMTextarea.js | 1/1 ✅ | 100.0% | 2/1/0 | 8,031/964 | 18.2s | 2.41 |
| Import Swap Named Imports 003 | StyleEditor.js | 1/1 ✅ | 100.0% | 3/1/0 | 14,580/3,878 | 68.3s | 1.31 |
| Literal Flip Boolean 001 | testHelpers.js | 1/1 ✅ | 100.0% | 2/1/0 | 12,032/557 | 11.7s | 1.33 |
| Literal Flip Boolean 002 | ReactNoopFlightServer.js | 1/1 ✅ | 100.0% | 2/1/0 | 12,254/444 | 10.1s | 1.11 |
| Literal Flip Boolean 003 | ReactFlightDOMClientEdge.js | 1/1 ✅ | 100.0% | 3/1/0 | 13,768/981 | 19.9s | 3.58 |
| Literal Off By One 001 | githubAPI.js | 1/1 ✅ | 100.0% | 2/1/0 | 12,262/368 | 9.5s | 0.67 |
| Literal Off By One 002 | code-path.js | 1/1 ✅ | 100.0% | 4/1/0 | 14,371/1,875 | 39.7s | 3.50 |
| Literal Off By One 003 | InspectedElement.js | 1/1 ✅ | 100.0% | 3/1/0 | 15,161/497 | 16.2s | 3.60 |
| Operator Remove Negation 001 | ReactDOMClient.js | 1/1 ✅ | 100.0% | 13/1/0 | 94,314/10,819 | 195.8s | 1.08 |
| Operator Remove Negation 002 | NativeEventsView.js | 0/1 ❌ | 100.0% | 4/1/0 | 13,976/4,243 | 79.0s | 3.03 |
| Operator Remove Negation 003 | ReactFlightUnbundledReferences.js | 1/1 ✅ | 100.0% | 3/2/0 | 35,154/1,838 | 271.9s | 2.00 |
| Operator Swap Arithmetic 001 | fallbackEvalContext.js | 1/1 ✅ | 100.0% | 3/1/0 | 11,367/756 | 20.9s | 0.00 |
| Operator Swap Arithmetic 002 | CSSShorthandProperty.js | 1/1 ✅ | 100.0% | 7/1/0 | 12,957/1,210 | 28.4s | 2.88 |
| Operator Swap Arithmetic 003 | hooks.js | 0/1 ❌ | 100.0% | 1/1/0 | 16,564/8,068 | 145.4s | 2.25 |
| Operator Swap Comparison 001 | index.js | 1/1 ✅ | 100.0% | 3/1/0 | 12,726/408 | 13.4s | 0.00 |
| Operator Swap Comparison 002 | ReactFlightDOMServerBrowser.js | 1/1 ✅ | 100.0% | 4/2/0 | 9,555/1,023 | 20.9s | 1.57 |
| Operator Swap Comparison 003 | ReactFlightDOMServerNode.js | 1/1 ✅ | 100.0% | 3/1/0 | 10,833/481 | 9.9s | 1.95 |
| Operator Swap Equality 001 | readInputData.js | 1/1 ✅ | 100.0% | 2/1/0 | 2,565/440 | 10.9s | 0.00 |
| Operator Swap Equality 002 | editor.js | 1/1 ✅ | 100.0% | 2/1/0 | 15,767/308 | 8.5s | 0.00 |
| Operator Swap Equality 003 | hooks.js | 1/1 ✅ | 100.0% | 3/1/0 | 15,917/559 | 13.9s | 2.25 |
| Operator Swap Increment Decrement 001 | ReactFlightDOMClientNode.js | 1/1 ✅ | 100.0% | 3/1/0 | 3,013/378 | 8.7s | 1.52 |
| Operator Swap Increment Decrement 002 | ReactFlightDOMClientNode.js | 1/1 ✅ | 100.0% | 3/1/0 | 14,408/441 | 11.4s | 1.92 |
| Operator Swap Increment Decrement 003 | loadSourceAndMetadata.js | 1/1 ✅ | 100.0% | 3/1/0 | 12,725/405 | 10.6s | 3.72 |
| Operator Swap Logical 001 | profiling.js | 1/1 ✅ | 100.0% | 2/1/0 | 2,840/426 | 10.4s | 0.00 |
| Operator Swap Logical 002 | SourceMapMetadataConsumer.js | 1/1 ✅ | 100.0% | 2/1/0 | 8,589/874 | 15.9s | 3.14 |
| Operator Swap Logical 003 | DevToolsFiberComponentStack.js | 1/1 ✅ | 100.0% | 3/1/0 | 8,909/1,061 | 22.1s | 4.13 |
| Operator Swap Nullish 001 | getBatchRange.js | 1/1 ✅ | 100.0% | 2/1/0 | 12,289/401 | 8.4s | 1.33 |
| Operator Swap Nullish 002 | EnterLeaveEventPlugin.js | 1/1 ✅ | 100.0% | 3/1/0 | 13,332/695 | 15.8s | 1.56 |
| Operator Swap Nullish 003 | backend.js | 1/1 ✅ | 100.0% | 3/1/0 | 24,008/2,979 | 54.1s | 3.15 |
| Regex Swap Regex Quantifier 001 | githubAPI.js | 1/1 ✅ | 100.0% | 2/1/0 | 6,954/803 | 22.1s | 0.67 |
| Regex Swap Regex Quantifier 002 | ReactFlightStackConfigV8.js | 1/1 ✅ | 100.0% | 3/1/0 | 9,976/2,091 | 38.6s | 3.06 |
| Regex Swap Regex Quantifier 003 | utils.js | 1/1 ✅ | 100.0% | 3/1/0 | 10,216/2,108 | 40.5s | 2.00 |
| Structural Delete Statement 001 | UnsupportedVersionDialog.js | 1/1 ✅ | 100.0% | 2/1/0 | 13,006/401 | 8.3s | 6.22 |
| Structural Delete Statement 002 | getComponentNameFromFiber.js | 1/1 ✅ | 100.0% | 3/1/0 | 8,192/729 | 14.5s | 0.62 |
| Structural Delete Statement 003 | simulateBrowserEventDispatch.js | 0/1 ❌ | 100.0% | 1/1/0 | 783/4,068 | 127.3s | 4.46 |
| Structural Remove Early Return 001 | InspectedElementStateTree.js | 1/1 ✅ | 100.0% | 4/1/0 | 7,488/694 | 16.9s | 0.36 |
| Structural Remove Early Return 002 | useCommitFilteringAndNavigation.js | 1/1 ✅ | 100.0% | 3/1/0 | 4,743/919 | 17.2s | 3.73 |
| Structural Remove Early Return 003 | ReactFiberAsyncAction.js | 0/1 ❌ | 100.0% | 3/1/0 | 9,269/4,093 | 64.6s | 1.46 |
| Structural Swap Adjacent Lines 001 | ReactServerConsoleConfigPlain.js | 1/1 ✅ | 100.0% | 2/1/0 | 6,481/348 | 14.0s | 1.00 |
| Structural Swap Adjacent Lines 002 | ReactNoopFlightServer.js | 1/1 ✅ | 100.0% | 3/1/0 | 12,501/906 | 18.4s | 1.11 |
| Structural Swap Adjacent Lines 003 | backend.js | 1/1 ✅ | 100.0% | 6/2/0 | 105,648/10,882 | 444.9s | 3.15 |
| Structural Swap If Else 001 | importFile.js | 0/1 ❌ | 100.0% | 3/1/0 | 6,516/1,294 | 27.5s | 0.00 |
| Structural Swap If Else 002 | ReactNativeFiberInspector.js | 0/1 ❌ | 100.0% | 3/1/0 | 14,238/3,059 | 55.9s | 3.18 |
| Structural Swap If Else 003 | ReactDOMFizzStaticNode.js | 1/1 ✅ | 100.0% | 5/1/0 | 9,460/3,829 | 66.0s | 1.88 |
| Unicode Unicode Hyphen 001 | Rectangle.js | 1/1 ✅ | 100.0% | 2/1/0 | 13,769/257 | 6.2s | 3.00 |
| Unicode Unicode Hyphen 002 | UnsupportedBridgeProtocolDialog.js | 1/1 ✅ | 100.0% | 2/1/0 | 3,961/323 | 7.4s | 3.83 |
| Unicode Unicode Hyphen 003 | ReactTypes.js | 1/1 ✅ | 100.0% | 3/1/0 | 10,500/431 | 11.7s | 1.24 |

## Category Summary

| Category | Runs | Verified | Edit Used | Success | Min/Avg/Max Difficulty |
|----------|------|----------|-----------|---------|------------------------|
| access | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 7 / 8.7 / 10 |
| call | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 6 / 7.7 / 10 |
| duplicate | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 7 / 9.7 / 12 |
| identifier | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 6 / 9.3 / 14 |
| import | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 2 / 4.7 / 6 |
| literal | 6 | 100.0% (6/6) | 100.0% (6/6) | 100.0% (6/6) | 4 / 6.2 / 9 |
| operator | 21 | 90.5% (19/21) | 100.0% (21/21) | 90.5% (19/21) | 1 / 6.5 / 13 |
| regex | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 6 / 7.3 / 8 |
| structural | 12 | 66.7% (8/12) | 100.0% (12/12) | 66.7% (8/12) | 4 / 7.6 / 15 |
| unicode | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 1 / 3.0 / 6 |

## Mutation Summary

| Mutation | Category | Runs | Verified | Edit Used | Success |
|----------|----------|------|----------|-----------|---------|
| delete-statement | structural | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| duplicate-line-flip | duplicate | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| flip-boolean | literal | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| identifier-multi-edit | identifier | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| off-by-one | literal | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| remove-early-return | structural | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| remove-negation | operator | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| remove-optional-chain | access | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-adjacent-lines | structural | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-arithmetic | operator | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| swap-call-args | call | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-comparison | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-equality | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-if-else | structural | 3 | 33.3% (1/3) | 100.0% (3/3) | 33.3% (1/3) |
| swap-increment-decrement | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-logical | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-named-imports | import | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-nullish | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-regex-quantifier | regex | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| unicode-hyphen | unicode | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |

## Difficulty Summary

| Difficulty Score | Runs | Verified | Edit Used | Success |
|------------------|------|----------|-----------|---------|
| 0-2 | 6 | 100.0% (6/6) | 100.0% (6/6) | 100.0% (6/6) |
| 3-5 | 12 | 83.3% (10/12) | 100.0% (12/12) | 83.3% (10/12) |
| 6-8 | 24 | 91.7% (22/24) | 100.0% (24/24) | 91.7% (22/24) |
| 9+ | 18 | 88.9% (16/18) | 100.0% (18/18) | 88.9% (16/18) |

## Failed Tasks (0% passing)

### Operator Remove Negation 002 (NativeEventsView.js) — 0/1

**All runs failed with same error:** File mismatch for NativeEventsView.js

**Sample agent response (run 1):**
```
Applied the minimal fix in `NativeEventsView.js` by removing the stray negation in the middle of the file:

- Changed:
  - `if (warning !== null) {`
  - to `if (warning === null) {`

Re-read the modified region to confirm only that intended line was changed.
```

**Diff (expected vs actual):**
```diff
@@ -114 @@
       },
       size: { width: xStop - xStart, height: NATIVE_EVENT_HEIGHT },
     };
-    if (!rectIntersectsRect(eventRect, rect)) {
+    if (rectIntersectsRect(eventRect, rect)) {
       return; // Not in view
     }
 
@@ -125 @@
 
     const drawableRect = intersectionOfRects(eventRect, rect);
     context.beginPath();
-    if (warning !== null) {
+    if (warning === null) {
       context.fillStyle = showHoverHighlight
         ? COLORS.WARNING_BACKGROUND_HOVER
         : COLORS.WARNING_BACKGROUND;
```

### Operator Swap Arithmetic 003 (hooks.js) — 0/1

**All runs failed with same error:** File mismatch for hooks.js

**Sample agent response (run 1):**
```
Fixed `hooks.js` by changing the swapped operator in `useIsOverflowing`:

- `container.clientWidth <= totalChildWidth`
+ `container.clientWidth < totalChildWidth`

I re-read the changed region to confirm only that intended line was modified.
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

**All runs failed with same error:** File mismatch for simulateBrowserEventDispatch.js

**Sample agent response (run 1):**
```
Fixed `simulateBrowserEventDispatch.js` with a single-line change in `simulateEventDispatch`:

- Restored returning the dispatch result:
  - `await _dispatch.call(this, eventImpl);`
  - → `return await _dispatch.call(this, eventImpl);`

Re-read confirmed only that intended line was changed.
```

**Diff (expected vs actual):**
```diff
@@ -56 @@
 
   eventImpl.isTrusted = false;
 
-  await _dispatch.call(this, eventImpl);
+  return await _dispatch.call(this, eventImpl);
 }
 
 async function _dispatch(eventImpl, legacyTargetOverrideFlag) {
@@ -82 @@
     const isActivationEvent = false; // TODO Not ported in fork.
 
     if (isActivationEvent && targetImpl._hasActivationBehavior) {
-      activationTarget = targetImpl;
     }
 
     let slotInClosedTree = false;
```

### Structural Remove Early Return 003 (ReactFiberAsyncAction.js) — 0/1

**All runs failed with same error:** File mismatch for ReactFiberAsyncAction.js

**Sample agent response (run 1):**
```
Implemented the fix in `ReactFiberAsyncAction.js` by restoring the missing guard clause in `releaseIsomorphicIndicator()`:

```js
if (pendingEntangledRoots === 0) {
  return;
}
```

No other files or regions were modified. I re-read the changed region to confirm only this intended mutation.
```

**Diff (expected vs actual):**
```diff
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
@@ -217 @@
 }
 
 function releaseIsomorphicIndicator() {
+  if (pendingEntangledRoots === 0) {
+    return;
+  }
   if (--pendingEntangledRoots === 0) {
     stopIsomorphicDefaultIndicator();
   }
```

### Structural Swap If Else 001 (importFile.js) — 0/1

**All runs failed with same error:** File mismatch for importFile.js

**Sample agent response (run 1):**
```
Updated `importFile.js` with the minimal fix at line 34:

- Changed:
  - `if (error instanceof InvalidProfileError) {`
  - to
  - `if (!(error instanceof InvalidProfileError)) {`

Re-read the region to confirm only that intended line changed.
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
Applied the fix in `ReactNativeFiberInspector.js` inside `getInspectorDataForViewTag` with the minimum possible change:

- Changed only the condition line:
  - `if (__DEV__) {`
  - → `if (!__DEV__) {`

Re-read the region to confirm only that intended line was touched.
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
