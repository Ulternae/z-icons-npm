import React from 'react';

export interface LanMobileRotateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileRotateSolid: React.FC<LanMobileRotateSolidProps>;
export default LanMobileRotateSolid;
