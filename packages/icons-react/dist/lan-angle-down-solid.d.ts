import React from 'react';

export interface LanAngleDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleDownSolid: React.FC<LanAngleDownSolidProps>;
export default LanAngleDownSolid;
