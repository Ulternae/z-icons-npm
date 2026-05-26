import React from 'react';

export interface LanGunSquirtThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGunSquirtThin: React.FC<LanGunSquirtThinProps>;
export default LanGunSquirtThin;
