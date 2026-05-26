import React from 'react';

export interface LanUpRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpRightSolid: React.FC<LanUpRightSolidProps>;
export default LanUpRightSolid;
