import React from 'react';

export interface LanMobileSignalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileSignalSolid: React.FC<LanMobileSignalSolidProps>;
export default LanMobileSignalSolid;
