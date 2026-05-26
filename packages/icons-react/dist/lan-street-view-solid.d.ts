import React from 'react';

export interface LanStreetViewSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStreetViewSolid: React.FC<LanStreetViewSolidProps>;
export default LanStreetViewSolid;
