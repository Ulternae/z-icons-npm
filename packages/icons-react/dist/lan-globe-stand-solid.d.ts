import React from 'react';

export interface LanGlobeStandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeStandSolid: React.FC<LanGlobeStandSolidProps>;
export default LanGlobeStandSolid;
