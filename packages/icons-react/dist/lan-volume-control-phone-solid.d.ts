import React from 'react';

export interface LanVolumeControlPhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeControlPhoneSolid: React.FC<LanVolumeControlPhoneSolidProps>;
export default LanVolumeControlPhoneSolid;
