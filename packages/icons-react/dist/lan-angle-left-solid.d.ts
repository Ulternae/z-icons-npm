import React from 'react';

export interface LanAngleLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleLeftSolid: React.FC<LanAngleLeftSolidProps>;
export default LanAngleLeftSolid;
