import { CoreLightIcons } from '../core/react-light';
import type { CoreIconName } from '../core/types';
import { createPackIcon, type PackIconProps } from './create-pack-icon';

export type ZCoreProps = PackIconProps<CoreIconName>;

export const ZCore = createPackIcon<CoreIconName>(CoreLightIcons, 'light');

export default ZCore;
