import React from 'react';

export interface LanSprinklerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprinklerSolid: React.FC<LanSprinklerSolidProps>;
export default LanSprinklerSolid;
