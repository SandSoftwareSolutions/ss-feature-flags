# @sandsoftwaresolutions/feature-flags

[![CI](https://github.com/SandSoftwareSolutions/ss-feature-flags/actions/workflows/ci.yml/badge.svg)](https://github.com/SandSoftwareSolutions/ss-feature-flags/actions/workflows/ci.yml)

Predictable, edge-friendly feature flags without a database or external service.

## Install

```bash
npm install @sandsoftwaresolutions/feature-flags
```

## Usage

```js
import { evaluate } from "@sandsoftwaresolutions/feature-flags";

const flag = { key: "new-checkout", rollout: 15, allow: ["qa-user"], deny: ["blocked-user"] };
const enabled = evaluate(flag, { id: user.id });
```

## How it works

`evaluate(flag, context)` returns a boolean. `enabled: false` always disables a flag; `deny` overrides all other rules; an `allow` list limits access to listed subjects; then `rollout` applies a deterministic 0–100 percentage. The same `key` and user ID always have the same result, so users do not jump in and out of an experiment.

Use `inRollout(key, subject, percentage)` when you only need the stable percentage decision. Flags are configuration, not authorization: enforce permissions separately on the server.
