import React from 'react';

export interface LanCornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCornSolid: React.FC<LanCornSolidProps>;
export default LanCornSolid;
