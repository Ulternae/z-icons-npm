import React from 'react';

export interface LanBullseyeArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseyeArrow: React.FC<LanBullseyeArrowProps>;
export default LanBullseyeArrow;
