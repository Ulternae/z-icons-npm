import React from 'react';

export interface LanGunSquirtRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGunSquirtRegular: React.FC<LanGunSquirtRegularProps>;
export default LanGunSquirtRegular;
