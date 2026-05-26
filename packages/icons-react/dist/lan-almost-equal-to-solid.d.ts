import React from 'react';

export interface LanAlmostEqualToSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlmostEqualToSolid: React.FC<LanAlmostEqualToSolidProps>;
export default LanAlmostEqualToSolid;
