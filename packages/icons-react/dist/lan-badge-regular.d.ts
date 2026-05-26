import React from 'react';

export interface LanBadgeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeRegular: React.FC<LanBadgeRegularProps>;
export default LanBadgeRegular;
