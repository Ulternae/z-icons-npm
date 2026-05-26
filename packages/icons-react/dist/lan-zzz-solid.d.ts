import React from 'react';

export interface LanZzzSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZzzSolid: React.FC<LanZzzSolidProps>;
export default LanZzzSolid;
