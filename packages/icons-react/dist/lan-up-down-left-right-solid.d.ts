import React from 'react';

export interface LanUpDownLeftRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpDownLeftRightSolid: React.FC<LanUpDownLeftRightSolidProps>;
export default LanUpDownLeftRightSolid;
