import React from 'react';

export interface LanIdBadgeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdBadgeRegular: React.FC<LanIdBadgeRegularProps>;
export default LanIdBadgeRegular;
