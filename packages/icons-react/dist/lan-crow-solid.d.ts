import React from 'react';

export interface LanCrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrowSolid: React.FC<LanCrowSolidProps>;
export default LanCrowSolid;
