import React from 'react';

export interface LanFileCircleInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleInfoSolid: React.FC<LanFileCircleInfoSolidProps>;
export default LanFileCircleInfoSolid;
