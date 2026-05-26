import React from 'react';

export interface LanLassoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLassoSolid: React.FC<LanLassoSolidProps>;
export default LanLassoSolid;
