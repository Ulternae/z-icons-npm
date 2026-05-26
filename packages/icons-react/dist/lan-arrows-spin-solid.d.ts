import React from 'react';

export interface LanArrowsSpinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsSpinSolid: React.FC<LanArrowsSpinSolidProps>;
export default LanArrowsSpinSolid;
