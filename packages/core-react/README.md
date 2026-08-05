# @zcorvus/core-react

Standalone React package for the regular, solid, and regular-duo ZCorvus Core variants.

```tsx
import {
  CoreAirplay,
  CoreAirplaySolid,
  CoreAirplayRegularDuo,
  ZCore,
  ZCoreSolid,
} from '@zcorvus/core-react';

export function Example() {
  return (
    <>
      <CoreAirplay />
      <ZCore name="airplay" />
      <ZCoreSolid name="airplay" />
      <CoreAirplaySolid />
      <CoreAirplayRegularDuo />
    </>
  );
}
```
