import React from 'react';

export interface LanGunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGunThin: React.FC<LanGunThinProps>;
export default LanGunThin;
