import React from 'react';

export interface LanGunRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGunRegular: React.FC<LanGunRegularProps>;
export default LanGunRegular;
