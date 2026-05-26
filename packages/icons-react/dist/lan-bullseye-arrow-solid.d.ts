import React from 'react';

export interface LanBullseyeArrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseyeArrowSolid: React.FC<LanBullseyeArrowSolidProps>;
export default LanBullseyeArrowSolid;
