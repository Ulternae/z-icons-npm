import React from 'react';

export interface LanFrostyHeadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrostyHeadSolid: React.FC<LanFrostyHeadSolidProps>;
export default LanFrostyHeadSolid;
