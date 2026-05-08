import { MinaLightIcons } from '../mina/react-light';
import type { MinaIconName } from '../mina/types';
import { createPackIcon, type PackIconProps } from './create-pack-icon';

export type ZMinaProps = PackIconProps<MinaIconName>;

export const ZMina = createPackIcon<MinaIconName>(MinaLightIcons, 'light');

export default ZMina;
