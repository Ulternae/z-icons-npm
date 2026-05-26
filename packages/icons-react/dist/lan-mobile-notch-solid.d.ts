import React from 'react';

export interface LanMobileNotchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileNotchSolid: React.FC<LanMobileNotchSolidProps>;
export default LanMobileNotchSolid;
