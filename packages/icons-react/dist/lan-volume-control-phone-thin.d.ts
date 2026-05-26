import React from 'react';

export interface LanVolumeControlPhoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeControlPhoneThin: React.FC<LanVolumeControlPhoneThinProps>;
export default LanVolumeControlPhoneThin;
