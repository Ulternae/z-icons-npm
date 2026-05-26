import React from 'react';

export interface LanMagnetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnetThin: React.FC<LanMagnetThinProps>;
export default LanMagnetThin;
