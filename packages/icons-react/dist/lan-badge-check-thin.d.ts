import React from 'react';

export interface LanBadgeCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeCheckThin: React.FC<LanBadgeCheckThinProps>;
export default LanBadgeCheckThin;
