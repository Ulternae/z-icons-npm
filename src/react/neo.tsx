import { NeoLightIcons } from '../neo/react-light';
import type { NeoIconName } from '../neo/types';
import { createPackIcon, type PackIconProps } from './create-pack-icon';

export type ZNeoProps = PackIconProps<NeoIconName>;

export const ZNeo = createPackIcon<NeoIconName>(NeoLightIcons, 'light');

export default ZNeo;
