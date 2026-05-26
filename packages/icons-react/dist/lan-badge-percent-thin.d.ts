import React from 'react';

export interface LanBadgePercentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgePercentThin: React.FC<LanBadgePercentThinProps>;
export default LanBadgePercentThin;
