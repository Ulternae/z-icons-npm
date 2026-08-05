import React, { useState } from 'react';
import { CoreSun, MinaCheck, MinaCheckSolid, ZIcon } from '@zcorvus/icons-react';
import { ZCore, ZMina, ZMinaSolid } from '@zcorvus/icons-react/packs';
import type { CoreIconName } from '@zcorvus/icons-react/types';

export function IndividualIconsExample() {
  return (
    <div>
      <MinaCheck className="size-4" />
      <MinaCheckSolid size={16} />
      <CoreSun color="#fbbf24" size={24} />
    </div>
  );
}

export function PackWrapperExample() {
  return (
    <div>
      <ZMina name="search" />
      <ZMinaSolid name="search" />
      <ZCore name="sun" />
    </div>
  );
}

export function DynamicIconExample() {
  return <ZIcon type="mina" name="search" variant="solid" />;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const iconName: CoreIconName = theme === 'light' ? 'sun' : 'moon';

  return (
    <button onClick={() => setTheme((value) => (value === 'light' ? 'dark' : 'light'))}>
      <ZCore
        name={iconName}
        size={24}
        color={theme === 'light' ? '#fbbf24' : '#60a5fa'}
      />
    </button>
  );
}
