import React from 'react';

export interface LanBullseyeArrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseyeArrowThin: React.FC<LanBullseyeArrowThinProps>;
export default LanBullseyeArrowThin;
