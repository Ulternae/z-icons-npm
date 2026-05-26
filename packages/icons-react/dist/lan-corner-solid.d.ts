import React from 'react';

export interface LanCornerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCornerSolid: React.FC<LanCornerSolidProps>;
export default LanCornerSolid;
