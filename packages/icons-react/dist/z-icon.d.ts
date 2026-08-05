import React from 'react';
import type { CoreSolidIconName, CoreRegularIconName, CoreRegularDuoIconName, NeoSolidIconName, NeoRegularIconName, NeoRegularDuoIconName, MinaLightIconName, MinaSolidIconName, BruSolidIconName, LanLightIconName, LanSolidIconName, LanRegularIconName, LanThinIconName } from './types/index.js';

type ZIconSelection =
  | { type: 'core'; variant: 'solid'; name: CoreSolidIconName }
  | { type: 'core'; variant?: 'regular'; name: CoreRegularIconName }
  | { type: 'core'; variant: 'regular-duo'; name: CoreRegularDuoIconName }
  | { type: 'neo'; variant: 'solid'; name: NeoSolidIconName }
  | { type: 'neo'; variant?: 'regular'; name: NeoRegularIconName }
  | { type: 'neo'; variant: 'regular-duo'; name: NeoRegularDuoIconName }
  | { type: 'mina'; variant?: 'light'; name: MinaLightIconName }
  | { type: 'mina'; variant: 'solid'; name: MinaSolidIconName }
  | { type: 'bru'; variant?: 'solid'; name: BruSolidIconName }
  | { type: 'lan'; variant?: 'light'; name: LanLightIconName }
  | { type: 'lan'; variant: 'solid'; name: LanSolidIconName }
  | { type: 'lan'; variant: 'regular'; name: LanRegularIconName }
  | { type: 'lan'; variant: 'thin'; name: LanThinIconName };

/** @deprecated Prefer pack-specific wrappers such as ZMina, ZLan, ZCore, ZNeo or ZBru. */
export type ZIconProps = Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & ZIconSelection & {
  size?: string | number;
};

/** @deprecated Prefer pack-specific wrappers such as ZMina, ZLan, ZCore, ZNeo or ZBru. */
export declare function ZIcon(props: ZIconProps): React.ReactElement | null;
