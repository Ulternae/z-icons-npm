import React from 'react';

export interface LanBowlHotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlHotThin: React.FC<LanBowlHotThinProps>;
export default LanBowlHotThin;
