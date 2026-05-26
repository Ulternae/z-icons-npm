import React from 'react';

export interface LanUserPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPlusRegular: React.FC<LanUserPlusRegularProps>;
export default LanUserPlusRegular;
