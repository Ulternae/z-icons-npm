import React from 'react';

export interface LanGunSquirtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGunSquirt: React.FC<LanGunSquirtProps>;
export default LanGunSquirt;
