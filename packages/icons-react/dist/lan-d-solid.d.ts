import React from 'react';

export interface LanDSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDSolid: React.FC<LanDSolidProps>;
export default LanDSolid;
