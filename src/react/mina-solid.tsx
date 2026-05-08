import { MinaSolidIcons } from '../mina/react-solid';
import type { MinaIconName } from '../mina/types';
import { createPackIcon, type PackIconProps } from './create-pack-icon';

export type ZMinaSolidProps = PackIconProps<MinaIconName>;

export const ZMinaSolid = createPackIcon<MinaIconName>(MinaSolidIcons, 'solid');

export default ZMinaSolid;
