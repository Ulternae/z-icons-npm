import React from 'react';

export interface LanBowArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowArrow: React.FC<LanBowArrowProps>;
export default LanBowArrow;
