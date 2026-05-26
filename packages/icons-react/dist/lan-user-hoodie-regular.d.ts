import React from 'react';

export interface LanUserHoodieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHoodieRegular: React.FC<LanUserHoodieRegularProps>;
export default LanUserHoodieRegular;
