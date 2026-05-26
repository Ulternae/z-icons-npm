import React from 'react';

export interface LanBowArrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowArrowSolid: React.FC<LanBowArrowSolidProps>;
export default LanBowArrowSolid;
