import React from 'react';

export interface LanBowlSaladThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlSaladThin: React.FC<LanBowlSaladThinProps>;
export default LanBowlSaladThin;
