import React from 'react';

export interface LanChairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChairSolid: React.FC<LanChairSolidProps>;
export default LanChairSolid;
