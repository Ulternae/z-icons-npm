import React from 'react';

export interface LanScarecrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScarecrowSolid: React.FC<LanScarecrowSolidProps>;
export default LanScarecrowSolid;
