import React from 'react';

export interface LanUserTagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTagSolid: React.FC<LanUserTagSolidProps>;
export default LanUserTagSolid;
