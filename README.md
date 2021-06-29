# Typescript issue 44796

https://github.com/microsoft/TypeScript/issues/44796

### Instructions

```
npm install
npm run build
```

Output on my machine:

```
$ npm run build 

> ts-issue-44796@1.0.0 build /home/panta/dev/sandbox/ts-issue-44796
> NODE_OPTIONS=--stack-trace-limit=1000 node_modules/.bin/tsc  --project ./tsconfig.json

/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:90672
                throw e;
                ^

RangeError: Value undefined out of range for undefined options property undefined
    at Map.set (<anonymous>)
    at recursiveTypeRelatedTo (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:50949:30)
    at isRelatedTo (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:50530:34)
    at checkTypeRelatedTo (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:50216:26)
    at isTypeRelatedTo (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:50179:24)
    at isTypeSubtypeOf (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49467:20)
    at /home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:47274:90
    at Object.some (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:658:25)
    at _loop_14 (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:47274:45)
    at removeStringLiteralsMatchedByTemplateLiterals (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:47279:21)
    at getUnionType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:47323:21)
    at mapType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:54514:45)
    at mapTypeWithAlias (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:54519:17)
    at instantiateConditionalType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49255:28)
    at getConditionalTypeInstantiation (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49243:30)
    at getConstraintOfDistributiveConditionalType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45324:40)
    at getConstraintFromConditionalType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45333:20)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45472:38)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45473:42)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45435:40)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45435:40)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45473:42)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45473:42)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45435:40)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45473:42)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45473:42)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getResolvedBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45390:74)
    at getBaseConstraintOfType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45374:34)
    at getApparentType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45528:46)
    at getReducedApparentType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45542:35)
    at getPropertiesOfType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45248:20)
    at getPropertiesOfUnionOrIntersectionType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45230:43)
    at getReducedType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45703:34)
    at getNormalizedType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:50190:48)
    at isRelatedTo (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:50470:30)
    at checkTypeRelatedTo (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:50216:26)
    at isTypeRelatedTo (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:50179:24)
    at isTypeAssignableTo (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49470:20)
    at instantiateTypeWorker (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49336:42)
    at instantiateTypeWithAlias (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49275:26)
    at instantiateType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49261:37)
    at getMappedType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:48985:63)
    at /home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49238:92
    at Object.map (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:371:29)
    at getConditionalTypeInstantiation (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49238:40)
    at instantiateTypeWorker (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49327:24)
    at instantiateTypeWithAlias (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49275:26)
    at instantiateType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:49261:37)
    at getTrueTypeFromConditionalType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:48408:70)
    at getSimplifiedConditionalType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:48214:28)
    at getSimplifiedType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:48161:41)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:56)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45473:42)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45435:40)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45473:42)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45419:25)
    at computeBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45473:42)
    at getImmediateBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45399:34)
    at getResolvedBaseConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45390:74)
    at getBaseConstraintOfType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45374:34)
    at getBaseConstraintOrType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:45380:20)
    at isGenericTypeWithUnionConstraint (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:55752:49)
    at someType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:54456:68)
    at getNarrowableTypeForReference (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:55765:17)
    at checkIdentifier (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:55881:20)
    at checkExpressionWorker (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:62473:28)
    at checkExpression (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:62428:38)
    at checkJsxExpression (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:57919:28)
    at checkExpressionWorker (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:62554:28)
    at checkExpression (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:62428:38)
    at checkExpressionForMutableLocation (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:62229:24)
    at checkJsxChildren (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:57613:40)
    at createJsxAttributesTypeFromAttributesProperty (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:57567:37)
    at checkJsxAttributes (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:57630:20)
    at checkExpressionWorker (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:62562:28)
    at checkExpression (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:62428:38)
    at checkExpressionWithContextualType (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:62132:28)
    at checkApplicableSignatureForJsxOpeningLikeElement (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:58963:34)
    at getSignatureApplicabilityError (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:59044:22)
    at chooseOverload (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:59516:25)
    at resolveCall (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:59360:26)
    at resolveJsxOpeningLikeElement (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:60014:20)
    at resolveSignature (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:60035:28)
    at getResolvedSignature (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:60046:26)
    at checkJsxOpeningLikeElementOrOpeningFragment (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:57885:27)
    at checkJsxElementDeferred (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:57473:13)
    at checkDeferredNode (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:67126:21)
    at Map.forEach (<anonymous>)
    at checkDeferredNodes (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:67093:37)
    at checkSourceFileWorker (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:67168:17)
    at checkSourceFile (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:67135:13)
    at getDiagnosticsWorker (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:67216:17)
    at Object.getDiagnostics (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:67205:24)
    at /home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:90693:85
    at runWithCancellationToken (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:90665:24)
    at getBindAndCheckDiagnosticsForFileNoCache (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:90682:20)
    at getAndCacheDiagnostics (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:90930:26)
    at getBindAndCheckDiagnosticsForFile (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:90679:20)
    at getSemanticDiagnosticsForFile (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:90676:60)
    at /home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:90616:24
    at Object.flatMap (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:424:25)
    at getDiagnosticsHelper (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:90612:56)
    at Object.getSemanticDiagnostics (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:90623:20)
    at emitFilesAndReportErrors (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:94956:57)
    at Object.emitFilesAndReportErrorsAndGetExitStatus (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:94985:18)
    at performCompilation (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:97601:29)
    at executeCommandLineWorker (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:97485:17)
    at Object.executeCommandLine (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:97530:20)
    at Object.<anonymous> (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/lib/tsc.js:97818:4)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:933:32)
    at Function.Module._load (internal/modules/cjs/loader.js:774:14)
    at Module.require (internal/modules/cjs/loader.js:957:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (/home/panta/dev/sandbox/ts-issue-44796/node_modules/typescript/bin/tsc:2:1)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:933:32)
    at Function.Module._load (internal/modules/cjs/loader.js:774:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! ts-issue-44796@1.0.0 build: `NODE_OPTIONS=--stack-trace-limit=1000 node_modules/.bin/tsc  --project ./tsconfig.json`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the ts-issue-44796@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/panta/.npm/_logs/2021-06-29T10_36_01_218Z-debug.log

```
