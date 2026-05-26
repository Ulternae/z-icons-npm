import React from 'react';

export interface LanFillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFillSolid: React.FC<LanFillSolidProps>;
export default LanFillSolid;
