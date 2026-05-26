import React from 'react';

export interface LanBowArcheryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowArcheryThin: React.FC<LanBowArcheryThinProps>;
export default LanBowArcheryThin;
