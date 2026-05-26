import React from 'react';

export interface LanBadgerHoneyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgerHoneyThin: React.FC<LanBadgerHoneyThinProps>;
export default LanBadgerHoneyThin;
