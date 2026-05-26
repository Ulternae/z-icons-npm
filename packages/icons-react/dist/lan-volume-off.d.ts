import React from 'react';

export interface LanVolumeOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeOff: React.FC<LanVolumeOffProps>;
export default LanVolumeOff;
