import React from 'react';

export interface LanUserKeyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserKeyRegular: React.FC<LanUserKeyRegularProps>;
export default LanUserKeyRegular;
