# @sandsoftwaresolutions/feature-flags

Predictable, edge-friendly feature flags without a database or dependency.

```js
import { evaluate } from "@sandsoftwaresolutions/feature-flags";

const enabled = evaluate({ key: "new-checkout", rollout: 15, allow: ["qa-user"] }, { id: user.id });
```

The same flag key and subject always produce the same roll-out decision. Allow/deny lists override rollout.
