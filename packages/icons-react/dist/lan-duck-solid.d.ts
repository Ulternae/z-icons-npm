import React from 'react';

export interface LanDuckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDuckSolid: React.FC<LanDuckSolidProps>;
export default LanDuckSolid;
