import React from 'react';

export interface LanVolumeOffThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeOffThin: React.FC<LanVolumeOffThinProps>;
export default LanVolumeOffThin;
