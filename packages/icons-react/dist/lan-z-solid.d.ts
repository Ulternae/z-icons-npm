import React from 'react';

export interface LanZSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZSolid: React.FC<LanZSolidProps>;
export default LanZSolid;
