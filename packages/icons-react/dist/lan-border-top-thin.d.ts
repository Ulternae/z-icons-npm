import React from 'react';

export interface LanBorderTopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderTopThin: React.FC<LanBorderTopThinProps>;
export default LanBorderTopThin;
