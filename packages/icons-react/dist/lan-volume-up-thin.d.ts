import React from 'react';

export interface LanVolumeUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeUpThin: React.FC<LanVolumeUpThinProps>;
export default LanVolumeUpThin;
