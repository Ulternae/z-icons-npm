import React from 'react';

export interface LanGrillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrillSolid: React.FC<LanGrillSolidProps>;
export default LanGrillSolid;
