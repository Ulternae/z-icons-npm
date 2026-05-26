import React from 'react';

export interface LanArrowProgressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowProgressSolid: React.FC<LanArrowProgressSolidProps>;
export default LanArrowProgressSolid;
