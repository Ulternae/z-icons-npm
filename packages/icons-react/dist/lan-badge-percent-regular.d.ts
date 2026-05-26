import React from 'react';

export interface LanBadgePercentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgePercentRegular: React.FC<LanBadgePercentRegularProps>;
export default LanBadgePercentRegular;
