import React from 'react';

export interface LanRightLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRightLeftSolid: React.FC<LanRightLeftSolidProps>;
export default LanRightLeftSolid;
