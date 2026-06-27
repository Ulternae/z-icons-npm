import React from 'react';
import { createZIcon } from '@zcorvus/icons-react/create';
import { CoreSun } from '@zcorvus/icons-react/core-sun';
import { MinaCheck } from '@zcorvus/icons-react/mina-check';
import { MinaCheckSolid } from '@zcorvus/icons-react/mina-check-solid';
import { MinaX } from '@zcorvus/icons-react/mina-x';
import type { IconPack, MinaIconName as RootMinaIconName } from '@zcorvus/icons-react';
import { coreIcons } from '@zcorvus/icons-react/packs-data/core';
import { minaIcons } from '@zcorvus/icons-react/packs-data/mina';
import { minaIconsSolid } from '@zcorvus/icons-react/packs-data/mina-solid';
import type { MinaIconName } from '@zcorvus/icons-react/types';

const typedMinaName: MinaIconName = 'check';
const typedRootMinaName: RootMinaIconName = typedMinaName;
const typedPack: IconPack = 'mina';

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
    regular: {
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
    regular: coreIcons,
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
