import React from 'react';

export interface LanAngleRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleRightSolid: React.FC<LanAngleRightSolidProps>;
export default LanAngleRightSolid;
