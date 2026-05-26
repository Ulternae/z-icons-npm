import React from 'react';

export interface LanFillDripSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFillDripSolid: React.FC<LanFillDripSolidProps>;
export default LanFillDripSolid;
