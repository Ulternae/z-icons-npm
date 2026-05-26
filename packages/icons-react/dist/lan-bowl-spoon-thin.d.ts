import React from 'react';

export interface LanBowlSpoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlSpoonThin: React.FC<LanBowlSpoonThinProps>;
export default LanBowlSpoonThin;
