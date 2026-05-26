import React from 'react';

export interface LanCandyCornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyCornSolid: React.FC<LanCandyCornSolidProps>;
export default LanCandyCornSolid;
