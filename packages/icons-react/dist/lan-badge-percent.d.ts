import React from 'react';

export interface LanBadgePercentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgePercent: React.FC<LanBadgePercentProps>;
export default LanBadgePercent;
