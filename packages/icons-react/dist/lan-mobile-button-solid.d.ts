import React from 'react';

export interface LanMobileButtonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileButtonSolid: React.FC<LanMobileButtonSolidProps>;
export default LanMobileButtonSolid;
