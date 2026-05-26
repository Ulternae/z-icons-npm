import React from 'react';

export interface LanDittoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDittoSolid: React.FC<LanDittoSolidProps>;
export default LanDittoSolid;
