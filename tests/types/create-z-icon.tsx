import React from 'react';
import { createZIcon } from '@zcorvus/icons-react/create';
import {
  CoreSun,
  MinaCheck,
  MinaCheckSolid,
  MinaX,
} from '@zcorvus/icons-react';
import {
  coreIcons,
  minaIcons,
  minaIconsSolid,
} from '@zcorvus/icons-react/packs-data';

const ManualIcon = createZIcon({
  mina: {
    light: {
      check: MinaCheck,
    },
    solid: {
      check: MinaCheckSolid,
    },
  },
  core: {
    light: {
      sun: CoreSun,
    },
  },
});

<ManualIcon type="mina" name="check" />;
<ManualIcon type="mina" name="check" variant="solid" className="size-4" />;
<ManualIcon type="core" name="sun" />;

// @ts-expect-error unknown pack
<ManualIcon type="neo" name="check" />;

// @ts-expect-error unknown icon
<ManualIcon type="mina" name="unknown" />;

const PackDataIcon = createZIcon({
  mina: {
    light: minaIcons,
    solid: minaIconsSolid,
  },
  core: {
    light: coreIcons,
  },
});

<PackDataIcon type="mina" name="check" variant="solid" />;
<PackDataIcon type="core" name="sun" />;

const FlatIcon = createZIcon(
  {
    mina: minaIconsSolid,
  },
  {
    inputVariant: 'solid',
    defaultVariant: 'solid',
    fallbackIcon: MinaX,
  }
);

<FlatIcon type="mina" name="check" variant="solid" />;

// @ts-expect-error unknown icon in flat registry
<FlatIcon type="mina" name="unknown" />;
