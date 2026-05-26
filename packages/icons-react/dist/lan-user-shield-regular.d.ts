import React from 'react';

export interface LanUserShieldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserShieldRegular: React.FC<LanUserShieldRegularProps>;
export default LanUserShieldRegular;
