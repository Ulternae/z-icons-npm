import React from 'react';

export interface LanBowArrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowArrowThin: React.FC<LanBowArrowThinProps>;
export default LanBowArrowThin;
