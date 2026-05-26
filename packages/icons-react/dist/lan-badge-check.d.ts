import React from 'react';

export interface LanBadgeCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeCheck: React.FC<LanBadgeCheckProps>;
export default LanBadgeCheck;
