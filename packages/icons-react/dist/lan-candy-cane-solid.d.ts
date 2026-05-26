import React from 'react';

export interface LanCandyCaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyCaneSolid: React.FC<LanCandyCaneSolidProps>;
export default LanCandyCaneSolid;
