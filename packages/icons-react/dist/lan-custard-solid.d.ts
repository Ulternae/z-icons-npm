import React from 'react';

export interface LanCustardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCustardSolid: React.FC<LanCustardSolidProps>;
export default LanCustardSolid;
