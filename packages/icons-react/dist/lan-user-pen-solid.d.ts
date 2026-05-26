import React from 'react';

export interface LanUserPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPenSolid: React.FC<LanUserPenSolidProps>;
export default LanUserPenSolid;
