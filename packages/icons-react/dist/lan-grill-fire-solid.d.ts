import React from 'react';

export interface LanGrillFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrillFireSolid: React.FC<LanGrillFireSolidProps>;
export default LanGrillFireSolid;
