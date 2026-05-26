import React from 'react';

export interface LanPeopleDressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleDressSolid: React.FC<LanPeopleDressSolidProps>;
export default LanPeopleDressSolid;
