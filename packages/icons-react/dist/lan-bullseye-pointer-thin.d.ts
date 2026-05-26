import React from 'react';

export interface LanBullseyePointerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseyePointerThin: React.FC<LanBullseyePointerThinProps>;
export default LanBullseyePointerThin;
