# Edit Benchmark Report

## Configuration

| Setting | Value |
|---------|-------|
| Date | 2026-02-16T07:24:37.307Z |
| Model | xai/xai/grok-4-1-fast |
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
| Successful Runs | 47 |
| **Task Success Rate** | **78.3% (47/60)** |
| Verified Rate | 78.3% (47/60) |
| Edit Tool Usage Rate | 100.0% (60/60) |
| **Edit Success Rate** | **94.0%** |
| Timeout Runs | 0 |
| Mutation Intent Match Rate | 81.7% |
| Patch Failure Rate | 6.0% (4/67) |
| Tasks All Passing | 47 |
| Tasks Flaky/Failing | 13 |

### Tool Calls

| Tool | Total | Avg/Run |
|------|-------|---------|
| Read | 130 | 2.2 |
| Edit | 67 | 1.1 |
| Write | 0 | 0.0 |
| **Tool Input Chars** | 16,148 | 269 |

### Tokens & Time

| Metric | Total | Avg/Run |
|--------|-------|---------|
| Input Tokens | 387,473 | 6,458 |
| Output Tokens | 252,081 | 4,201 |
| Total Tokens | 2,701,699 | 45,028 |
| Duration | 1888.3s | 31.5s |
| **Avg Indent Score** | — | **2.28** |

### Hashline Edit Subtypes

| Operation | Count | % |
|-----------|-------|---|
| set_line | 64 | 85.3% |
| replace_lines | 6 | 8.0% |
| insert_after | 5 | 6.7% |
| replace | 0 | 0.0% |
| **Total** | **75** | 100% |

## Task Results

| Task | File | Success | Edit Hit | R/E/W | Tokens (In/Out) | Time | Indent |
|------|------|---------|----------|-------|-----------------|------|--------|
| Access Remove Optional Chain 001 | registerDevToolsEventLogger.js | 0/1 ❌ | 0.0% | 2/1/0 | 20,569/8,762 | 62.2s | 1.00 |
| Access Remove Optional Chain 002 | TimelineContext.js | 1/1 ✅ | 100.0% | 2/1/0 | 9,722/2,755 | 26.0s | 1.29 |
| Access Remove Optional Chain 003 | astUtils.js | 1/1 ✅ | 100.0% | 2/1/0 | 17,633/5,085 | 41.8s | 4.85 |
| Call Swap Call Args 001 | testHelpers.js | 1/1 ✅ | 100.0% | 2/1/0 | 13,638/1,662 | 15.0s | 1.33 |
| Call Swap Call Args 002 | FlamegraphChartBuilder.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/1,703 | 14.2s | 3.79 |
| Call Swap Call Args 003 | SyntheticEvent.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/3,202 | 20.8s | 3.76 |
| Duplicate Duplicate Line Flip 001 | index.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/1,556 | 12.3s | 0.00 |
| Duplicate Duplicate Line Flip 002 | ActivityList.js | 1/1 ✅ | 100.0% | 1/1/0 | 0/1,467 | 12.4s | 3.61 |
| Duplicate Duplicate Line Flip 003 | SyntheticEvent.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/4,006 | 25.4s | 1.02 |
| Identifier Identifier Multi Edit 001 | TabBar.js | 1/1 ✅ | 100.0% | 3/2/0 | 0/2,648 | 18.3s | 3.33 |
| Identifier Identifier Multi Edit 002 | EventPluginRegistry.js | 1/1 ✅ | 100.0% | 3/2/0 | 12,645/4,173 | 35.2s | 3.94 |
| Identifier Identifier Multi Edit 003 | ReactPerformanceTrackProperties.js | 1/1 ✅ | 66.7% | 6/3/0 | 17,320/6,364 | 42.4s | 9.95 |
| Import Swap Named Imports 001 | CommitFlamegraphListItem.js | 1/1 ✅ | 100.0% | 2/1/0 | 357/2,562 | 19.2s | 2.86 |
| Import Swap Named Imports 002 | ReactDOMTextarea.js | 1/1 ✅ | 100.0% | 4/1/0 | 16,665/3,179 | 29.2s | 2.41 |
| Import Swap Named Imports 003 | StyleEditor.js | 0/1 ❌ | 100.0% | 3/1/0 | 0/11,345 | 64.6s | 1.31 |
| Literal Flip Boolean 001 | testHelpers.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/1,186 | 10.7s | 1.33 |
| Literal Flip Boolean 002 | ReactNoopFlightServer.js | 1/1 ✅ | 100.0% | 2/1/0 | 7,820/1,124 | 12.0s | 1.11 |
| Literal Flip Boolean 003 | ReactFlightDOMClientEdge.js | 1/1 ✅ | 100.0% | 2/1/0 | 18,134/2,949 | 29.9s | 3.58 |
| Literal Off By One 001 | githubAPI.js | 0/1 ❌ | 100.0% | 1/1/0 | 0/932 | 8.5s | 0.67 |
| Literal Off By One 002 | code-path.js | 0/1 ❌ | 100.0% | 2/1/0 | 0/7,260 | 47.1s | 3.50 |
| Literal Off By One 003 | InspectedElement.js | 1/1 ✅ | 100.0% | 2/1/0 | 10,354/1,533 | 14.2s | 3.60 |
| Operator Remove Negation 001 | ReactDOMClient.js | 1/1 ✅ | 50.0% | 4/2/0 | 0/14,391 | 91.0s | 1.08 |
| Operator Remove Negation 002 | NativeEventsView.js | 1/1 ✅ | 100.0% | 2/1/0 | 15,089/7,366 | 53.0s | 3.03 |
| Operator Remove Negation 003 | ReactFlightUnbundledReferences.js | 0/1 ❌ | 100.0% | 1/1/0 | 0/4,446 | 131.0s | 2.00 |
| Operator Swap Arithmetic 001 | fallbackEvalContext.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/1,594 | 12.3s | 0.00 |
| Operator Swap Arithmetic 002 | CSSShorthandProperty.js | 1/1 ✅ | 100.0% | 3/1/0 | 48,877/10,132 | 85.4s | 2.88 |
| Operator Swap Arithmetic 003 | hooks.js | 0/1 ❌ | 100.0% | 2/1/0 | 0/4,043 | 30.1s | 2.25 |
| Operator Swap Comparison 001 | index.js | 1/1 ✅ | 66.7% | 3/3/0 | 9,109/2,649 | 23.7s | 0.00 |
| Operator Swap Comparison 002 | ReactFlightDOMServerBrowser.js | 1/1 ✅ | 100.0% | 2/1/0 | 10,513/2,657 | 19.1s | 1.57 |
| Operator Swap Comparison 003 | ReactFlightDOMServerNode.js | 1/1 ✅ | 100.0% | 2/1/0 | 13,883/1,639 | 14.4s | 1.95 |
| Operator Swap Equality 001 | readInputData.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/2,404 | 18.6s | 0.00 |
| Operator Swap Equality 002 | editor.js | 1/1 ✅ | 100.0% | 1/1/0 | 0/1,311 | 9.5s | 0.00 |
| Operator Swap Equality 003 | hooks.js | 1/1 ✅ | 100.0% | 2/1/0 | 21,188/1,951 | 17.2s | 2.25 |
| Operator Swap Increment Decrement 001 | ReactFlightDOMClientNode.js | 1/1 ✅ | 100.0% | 2/1/0 | 7,734/1,118 | 12.1s | 1.52 |
| Operator Swap Increment Decrement 002 | ReactFlightDOMClientNode.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/1,045 | 12.8s | 1.92 |
| Operator Swap Increment Decrement 003 | loadSourceAndMetadata.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/1,224 | 11.1s | 3.72 |
| Operator Swap Logical 001 | profiling.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/956 | 9.6s | 0.00 |
| Operator Swap Logical 002 | SourceMapMetadataConsumer.js | 0/1 ❌ | 100.0% | 2/1/0 | 4,380/6,328 | 38.4s | 3.23 |
| Operator Swap Logical 003 | DevToolsFiberComponentStack.js | 1/1 ✅ | 100.0% | 1/1/0 | 1,403/2,759 | 19.7s | 4.13 |
| Operator Swap Nullish 001 | getBatchRange.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/1,684 | 13.1s | 1.33 |
| Operator Swap Nullish 002 | EnterLeaveEventPlugin.js | 1/1 ✅ | 100.0% | 2/1/0 | 8,464/2,653 | 22.1s | 1.56 |
| Operator Swap Nullish 003 | backend.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/4,417 | 25.5s | 3.15 |
| Regex Swap Regex Quantifier 001 | githubAPI.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/1,221 | 13.5s | 0.50 |
| Regex Swap Regex Quantifier 002 | ReactFlightStackConfigV8.js | 1/1 ✅ | 100.0% | 2/1/0 | 13,316/4,717 | 32.8s | 3.06 |
| Regex Swap Regex Quantifier 003 | utils.js | 1/1 ✅ | 100.0% | 3/1/0 | 13,721/5,785 | 45.8s | 2.00 |
| Structural Delete Statement 001 | UnsupportedVersionDialog.js | 0/1 ❌ | 100.0% | 3/1/0 | 3,317/8,600 | 60.2s | 6.22 |
| Structural Delete Statement 002 | getComponentNameFromFiber.js | 0/1 ❌ | 100.0% | 2/1/0 | 10,708/2,045 | 17.4s | 0.62 |
| Structural Delete Statement 003 | simulateBrowserEventDispatch.js | 0/1 ❌ | 100.0% | 1/1/0 | 1,608/7,779 | 47.5s | 4.46 |
| Structural Remove Early Return 001 | InspectedElementStateTree.js | 0/1 ❌ | 100.0% | 2/1/0 | 280/3,107 | 24.0s | 0.33 |
| Structural Remove Early Return 002 | useCommitFilteringAndNavigation.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/9,922 | 61.9s | 3.73 |
| Structural Remove Early Return 003 | ReactFiberAsyncAction.js | 0/1 ❌ | 100.0% | 2/1/0 | 0/6,450 | 39.6s | 1.46 |
| Structural Swap Adjacent Lines 001 | ReactServerConsoleConfigPlain.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/2,862 | 18.2s | 1.00 |
| Structural Swap Adjacent Lines 002 | ReactNoopFlightServer.js | 1/1 ✅ | 100.0% | 2/1/0 | 9,974/3,289 | 22.3s | 1.11 |
| Structural Swap Adjacent Lines 003 | backend.js | 0/1 ❌ | 100.0% | 3/1/0 | 24,216/15,847 | 96.8s | 3.15 |
| Structural Swap If Else 001 | importFile.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/4,336 | 25.6s | 0.00 |
| Structural Swap If Else 002 | ReactNativeFiberInspector.js | 1/1 ✅ | 100.0% | 2/1/0 | 12,430/4,238 | 29.7s | 3.18 |
| Structural Swap If Else 003 | ReactDOMFizzStaticNode.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/16,589 | 88.5s | 1.88 |
| Unicode Unicode Hyphen 001 | Rectangle.js | 1/1 ✅ | 100.0% | 2/1/0 | 12,406/657 | 7.5s | 3.00 |
| Unicode Unicode Hyphen 002 | UnsupportedBridgeProtocolDialog.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/1,149 | 11.5s | 3.83 |
| Unicode Unicode Hyphen 003 | ReactTypes.js | 1/1 ✅ | 100.0% | 2/1/0 | 0/1,268 | 14.7s | 1.24 |

## Category Summary

| Category | Runs | Verified | Edit Used | Success | Min/Avg/Max Difficulty |
|----------|------|----------|-----------|---------|------------------------|
| access | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) | 7 / 8.7 / 10 |
| call | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 6 / 7.7 / 10 |
| duplicate | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 7 / 9.7 / 12 |
| identifier | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 6 / 9.3 / 14 |
| import | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) | 2 / 4.7 / 6 |
| literal | 6 | 66.7% (4/6) | 100.0% (6/6) | 66.7% (4/6) | 4 / 6.2 / 9 |
| operator | 21 | 85.7% (18/21) | 100.0% (21/21) | 85.7% (18/21) | 1 / 6.5 / 13 |
| regex | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 6 / 7.3 / 8 |
| structural | 12 | 50.0% (6/12) | 100.0% (12/12) | 50.0% (6/12) | 4 / 7.6 / 15 |
| unicode | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) | 1 / 3.0 / 6 |

## Mutation Summary

| Mutation | Category | Runs | Verified | Edit Used | Success |
|----------|----------|------|----------|-----------|---------|
| delete-statement | structural | 3 | 0.0% (0/3) | 100.0% (3/3) | 0.0% (0/3) |
| duplicate-line-flip | duplicate | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| flip-boolean | literal | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| identifier-multi-edit | identifier | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| off-by-one | literal | 3 | 33.3% (1/3) | 100.0% (3/3) | 33.3% (1/3) |
| remove-early-return | structural | 3 | 33.3% (1/3) | 100.0% (3/3) | 33.3% (1/3) |
| remove-negation | operator | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| remove-optional-chain | access | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| swap-adjacent-lines | structural | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| swap-arithmetic | operator | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| swap-call-args | call | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-comparison | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-equality | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-if-else | structural | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-increment-decrement | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-logical | operator | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| swap-named-imports | import | 3 | 66.7% (2/3) | 100.0% (3/3) | 66.7% (2/3) |
| swap-nullish | operator | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| swap-regex-quantifier | regex | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |
| unicode-hyphen | unicode | 3 | 100.0% (3/3) | 100.0% (3/3) | 100.0% (3/3) |

## Difficulty Summary

| Difficulty Score | Runs | Verified | Edit Used | Success |
|------------------|------|----------|-----------|---------|
| 0-2 | 6 | 100.0% (6/6) | 100.0% (6/6) | 100.0% (6/6) |
| 3-5 | 12 | 66.7% (8/12) | 100.0% (12/12) | 66.7% (8/12) |
| 6-8 | 24 | 79.2% (19/24) | 100.0% (24/24) | 79.2% (19/24) |
| 9+ | 18 | 77.8% (14/18) | 100.0% (18/18) | 77.8% (14/18) |

## Edit Tool Errors

Failures where the edit tool returned an error or failed to apply the patch.

### Access Remove Optional Chain 001 (registerDevToolsEventLogger.js)

#### Run 1

##### Attempt 1

- Path: registerDevToolsEventLogger.js
- Operation: —

**Tool error**

```
No changes made to registerDevToolsEventLogger.js. The edits produced identical content.
Edit 0: replacement for 36壐 is identical to current content:
  36壐|         currentLoggingIFrame.contentWindow?.postMessage(
Your content must differ from what the file already contains. Re-read the file to see the current state.
```

**Patch args**

```diff
{
  "path": "registerDevToolsEventLogger.js",
  "edits": [
    {
      "set_line": {
        "anchor": "36壐",
        "new_text": "        currentLoggingIFrame.contentWindow?.postMessage("
      }
    }
  ]
}
```

### Identifier Identifier Multi Edit 003 (ReactPerformanceTrackProperties.js)

#### Run 1

##### Attempt 1

- Path: ReactPerformanceTrackProperties.js
- Operation: —

**Tool error**

```
3 lines have changed since last read. Use the updated references shown below (>>> marks changed lines).

    334歪          // elsewhere but still mark it as a cause of render.
    335辧          const line = '\xa0\xa0'.repeat(indent) + key;
>>> 336鑊          properties.push([REMOVED + line, '\u2026'], [ADDED + line, '\u2026']);
    337蛯          isDeeplyEqual = false;
    338案          continue;
    ...
    359辧              const line = '\xa0\xa0'.repeat(indent) + key;
    360匂              const desc = '<' + typeName + ' \u2026 />';
>>> 361腳              properties.push([REMOVED + line, desc], [DADED + line, desc]);
    362蛯              isDeeplyEqual = false;
    363案              continue;
    ...
    429輘      }
    430昲    } else {
>>> 431镆      properties.push([DADED + '\xa0\xa0'.repeat(indent) + key, '\u2026']);
    432蛯      isDeeplyEqual = false;
    433輘    }
```

**Patch args**

```diff
{
  "path": "ReactPerformanceTrackProperties.js",
  "edits": [
    {
      "set_line": {
        "anchor": "281槧",
        "new_text": "const ADDED = '+ ';"
      }
    },
    {
      "set_line": {
        "anchor": "336铪",
        "new_text": "          properties.push([REMOVED + line, '…'], [ADDED + line, '…']);"
      }
    },
    {
      "set_line": {
        "anchor": "361踨",
        "new_text": "              properties.push([REMOVED + line, desc], [ADDED + line, desc]);"
      }
    },
    {
      "set_line": {
        "anchor": "431銆",
        "new_text": "      properties.push([ADDED + '  '.repeat(indent) + key, '…']);"
      }
    }
  ]
}
```

### Operator Remove Negation 001 (ReactDOMClient.js)

#### Run 1

##### Attempt 1

- Path: ReactDOMClient.js
- Operation: —

**Tool error**

```
No changes made to ReactDOMClient.js. The edits produced identical content.
Edit 0: replacement for 57郪 is identical to current content:
  57郪|   if (foundDevTools && canUseDOM && window.top === window.self) {
Your content must differ from what the file already contains. Re-read the file to see the current state.
The file differs from the original fixture at these lines:
57:郪  -  if (foundDevTools && canUseDOM && window.top === window.self) {
58:棘  +  if (!foundDevTools && canUseDOM && window.top === window.self) {
```

**Patch args**

```diff
{
  "path": "ReactDOMClient.js",
  "edits": [
    {
      "set_line": {
        "anchor": "57郪",
        "new_text": "  if (foundDevTools && canUseDOM && window.top === window.self) {"
      }
    }
  ]
}
```

### Operator Swap Comparison 001 (index.js)

#### Run 1

##### Attempt 1

- Path: index.js
- Operation: —

**Tool error**

```
No changes made to index.js. The edits produced identical content.
Edit 0: replacement for 63螇 is identical to current content:
  63螇|           <Suspense fallback={<div>Loading...</div>}> 
Your content must differ from what the file already contains. Re-read the file to see the current state.
The file differs from the original fixture at these lines:
63:囟  -          <=Suspense fallback={<div>Loading...</div>}>
64:螇  +          <Suspense fallback={<div>Loading...</div>}>
```

**Patch args**

```diff
{
  "path": "index.js",
  "edits": [
    {
      "set_line": {
        "anchor": "63螇",
        "new_text": "          <Suspense fallback={<div>Loading...</div>}> "
      }
    }
  ]
}
```

## Failed Tasks (0% passing)

### Access Remove Optional Chain 001 (registerDevToolsEventLogger.js) — 0/1

**All runs failed with same error:** File mismatch for registerDevToolsEventLogger.js

**Sample agent response (run 1):**
```
**The optional chaining operator (`?.`) is already present on line 36 (`currentLoggingIFrame.contentWindow?.postMessage`).**

No edit required.
```

**Diff (expected vs actual):**
```diff
@@ -31 @@
         const additionalContext: LoggerContext | {} =
           fetchAdditionalContext != null ? await fetchAdditionalContext() : {};
 
-        currentLoggingIFrame?.contentWindow?.postMessage(
+        currentLoggingIFrame.contentWindow?.postMessage(
           {
             source: 'react-devtools-logging',
             event: eventWithoutMetadata,
```

### Import Swap Named Imports 003 (StyleEditor.js) — 0/1

**All runs failed with same error:** File mismatch for StyleEditor.js

**Sample agent response (run 1):**
```
**Fixed.** Swapped `BridgeContext` and `StoreContext` in the import (lines 14–15). Confirmed via re-read: only those lines changed.
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

### Literal Off By One 001 (githubAPI.js) — 0/1

**All runs failed with same error:** File mismatch for githubAPI.js

**Sample agent response (run 1):**
```
**Fixed:** Off-by-one in `githubAPI.js` line 44 changed from `> 1` to `>= 1`.

**Verification:** Single-line edit applied atomically. Confirmed via tool response. Matches constraints: minimal token change, exact formatting preserved, no other modifications.
```

**Diff (expected vs actual):**
```diff
@@ -39 @@
 export async function searchGitHubIssues(message: string): Promise<GitHubIssue | null> {
   const response = await fetch(searchGitHubIssuesURL(message));
   const data = await response.json();
-  if (data.items.length > 0) {
+  if (data.items.length >= 1) {
     const item = data.items[0];
     return {
       title: item.title,
```

### Literal Off By One 002 (code-path.js) — 0/1

**All runs failed with same error:** File mismatch for code-path.js

**Sample agent response (run 1):**
```
**Fixed:** Changed `item[1] = 1;` to `item[1] = 0;` on line 232.

**Verification:** Re-read lines 220–240 confirms the numeric literal updated (`232刐        item[1] = 0;`). Only that line changed; structure preserved. This addresses the off-by-one by ensuring the last `nextSegment` starts traversal at `index=0` (processes callback before handling its `nextSegments`).
```

**Diff (expected vs actual):**
```diff
@@ -226 @@
         stack.push([segment.nextSegments[index], 0]);
       } else if (index === end) {
         item[0] = segment.nextSegments[index];
+        item[1] = 1;
         item[1] = 0;
         item[1] = 0;
-      } else {
         stack.pop();
       }
     }
```

### Operator Remove Negation 003 (ReactFlightUnbundledReferences.js) — 0/1

**All runs failed with same error:** File mismatch for ReactFlightUnbundledReferences.js

**Sample agent response (run 1):**
```
**Fixed.** Negation (`!`) in `if (!cachedReference)` (line 296) replaced with strict `cachedReference === undefined` check. This avoids coercing falsy non-`undefined` values (e.g., `null`, `false`, `0`) into branch entry, preserving potential exports defensively. Confirmed via re-read: only intended line mutated, structure/formatting preserved. The similar `!descriptor` (line 330) unchanged—safe as `Object.getOwnPropertyDescriptor` returns `undefined` or truthy object.
```

**Diff (expected vs actual):**
```diff
@@ -247 @@
         // Use a cached value
         return target.then;
       }
-      if (!target.$$async) {
+      if (target.$$async) {
         // If this module is expected to return a Promise (such as an AsyncModule) then
         // we should resolve that with a client reference that unwraps the Promise on
         // the client.
@@ -288 @@
     );
   }
   let cachedReference = target[name];
-  if (!cachedReference) {
+  if (cachedReference === undefined) {
     const reference: ClientReference<any> = registerClientReferenceImpl(
       (function () {
         throw new Error(
```

### Operator Swap Arithmetic 003 (hooks.js) — 0/1

**All runs failed with same error:** File mismatch for hooks.js

**Sample agent response (run 1):**
```
**Fixed:** Swapped `<=` to `<` in `useIsOverflowing` (line 129).

**Verification:** Re-read lines 125–144; change applied exactly as intended (`container.clientWidth < totalChildWidth`), no other modifications.
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

### Operator Swap Logical 002 (SourceMapMetadataConsumer.js) — 0/1

**All runs failed with same error:** File mismatch for SourceMapMetadataConsumer.js

**Sample agent response (run 1):**
```
**Fixed.** Changed line 51 from `sourceRoot != null && util.isAbsolute(sourceRoot) || util.isAbsolute(source)` to `sourceRoot != null && util.isAbsolute(sourceRoot)`.

The `|| util.isAbsolute(source)` clause was incorrect per source-map-js logic and the preceding comment: relativize only if `sourceRoot != null && util.isAbsolute(sourceRoot)`. This prevents `util.relative(null, source)` and matches verified region post-edit.
```

**Diff (expected vs actual):**
```diff
@@ -45 @@
   // be particularly problematic when the source root is a prefix of the
   // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
   source =
-    sourceRoot != null && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
-      ? util.relative(sourceRoot, source)
-      : source;
+    sourceRoot != null && util.isAbsolute(sourceRoot) ? util.relative(sourceRoot, source) : source;
   return util.computeSourceURL(sourceRoot, source);
 }
 
```

### Structural Delete Statement 001 (UnsupportedVersionDialog.js) — 0/1

**All runs failed with same error:** File mismatch for UnsupportedVersionDialog.js

**Sample agent response (run 1):**
```
**Fixed.** Inserted `const store = useContext(StoreContext);` after the `dispatch` declaration (original line 21). Confirmed via re-read: `store` now defined before use in `useEffect`; no other changes. Auto-formatting added minor whitespace (one extra empty line between declarations); content otherwise preserved. Code now references valid `store`.
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
getComponentNameFromFiber.js fixed. Inserted missing `const functionName = getComponentNameFromType(innerType) || '';` in `getWrappedName`.
```

**Diff (expected vs actual):**
```diff
@@ -54 @@
 
 // Keep in sync with shared/getComponentNameFromType
 function getWrappedName(outerType: mixed, innerType: any, wrapperName: string): string {
-  const functionName = innerType.displayName || innerType.name || '';
+  const functionName = getComponentNameFromType(innerType) || '';
+
   return (
     (outerType: any).displayName ||
     (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName)
```

### Structural Delete Statement 003 (simulateBrowserEventDispatch.js) — 0/1

**All runs failed with same error:** File mismatch for simulateBrowserEventDispatch.js

**Sample agent response (run 1):**
```
**Fixed.** Changed line 256 from `eventImpl.target = t.target;` to `eventImpl.target = wrapperForImpl(t.target);` to consistently use wrappers, matching `currentTarget` and `relatedTarget`. This restores the deleted wrapper call, ensuring `event.target` is the user-facing wrapper (not internal impl), critical for listener access (e.g., `event.target.nodeName`).  

Preserved exact indentation/formatting. Single minimal mutation.
```

**Diff (expected vs actual):**
```diff
@@ -82 @@
     const isActivationEvent = false; // TODO Not ported in fork.
 
     if (isActivationEvent && targetImpl._hasActivationBehavior) {
-      activationTarget = targetImpl;
     }
 
     let slotInClosedTree = false;
@@ -226 @@
   for (let i = structIndex; i >= 0; i--) {
     const t = eventImpl._path[i];
     if (t.target) {
-      eventImpl.target = t.target;
+      eventImpl.target = wrapperForImpl(t.target);
       break;
     }
   }
```

### Structural Remove Early Return 001 (InspectedElementStateTree.js) — 0/1

**All runs failed with same error:** File mismatch for InspectedElementStateTree.js

**Sample agent response (run 1):**
```
**Fixed.** Inserted guard clause after line 38 (`38皇`):

```
  if (!state) {
    return null;
  }
```

Confirmed via re-read (lines 30–54): only intended lines shifted/added (39荈–41輘). Object.entries(state) now guarded against null/undefined. No other changes.
```

**Diff (expected vs actual):**
```diff
@@ -36 @@
   store,
 }: Props): React.Node {
   const { state, type } = inspectedElement;
-  if (state == null) {
+  if (!state) {
     return null;
   }
 
```

### Structural Remove Early Return 003 (ReactFiberAsyncAction.js) — 0/1

**All runs failed with same error:** File mismatch for ReactFiberAsyncAction.js

**Sample agent response (run 1):**
```
**Fix applied:** Added guard clause `if (currentEntangledPendingCount === 0) { return; }` early in `pingEngtangledActionScope()` to prevent decrementing from zero (lines 104–106 post-edit).

Confirmed via re-read: Insertion precise; no other changes to structure, formatting, or unrelated code. Line shifts expected from insertion; hashes/content match except inserted lines.

Similar pattern exists in `releaseIsomorphicIndicator()` (line 247); untouched per "only the ONE buggy" constraint.
```

**Diff (expected vs actual):**
```diff
@@ -85 @@
 }
 
 function pingEngtangledActionScope() {
+  if (currentEntangledPendingCount === 0) {
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

**All runs failed with same error:** File mismatch for backend.js

**Sample agent response (run 1):**
```
Fixed order of `onReloadAndProfileFlagsReset()` call and `new Agent()` in `connectToDevTools()`: reset flags before agent init. Confirmed via re-read (lines 192-195 swapped; second instance unchanged as per "one buggy" rule).
```

**Diff (expected vs actual):**
```diff
@@ -77 @@
     useHttps = false,
     port = 8097,
     websocket,
-    resolveRNStyle = (null: $FlowFixMe),
     retryConnectionDelay = 2000,
     retryConnectionDelay = 2000,
+    resolveRNStyle = (null: $FlowFixMe),
     isAppActive = () => true,
     onSettingsUpdated,
     isReloadAndProfileSupported = getIsReloadAndProfileSupported(),
@@ -169 @@
 
     // TODO (npm-packages) Warn if "isBackendStorageAPISupported"
     // $FlowFixMe[incompatible-call] found when upgrading Flow
-    const agent = new Agent(bridge, isProfiling, onReloadAndProfile);
     if (typeof onReloadAndProfileFlagsReset === 'function') {
       onReloadAndProfileFlagsReset();
     }
     if (typeof onReloadAndProfileFlagsReset === 'function') {
       onReloadAndProfileFlagsReset();
     }
+    const agent = new Agent(bridge, isProfiling, onReloadAndProfile);
 
     if (onSettingsUpdated != null) {
       agent.addListener('updateHookSettings', onSettingsUpdated);
```
