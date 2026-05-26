import React from 'react';

export interface LanDressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDressSolid: React.FC<LanDressSolidProps>;
export default LanDressSolid;
