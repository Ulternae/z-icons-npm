import React from 'react';

export interface LanVolumeControlPhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeControlPhoneSolid(props: LanVolumeControlPhoneSolidProps): React.ReactElement;
export default LanVolumeControlPhoneSolid;
