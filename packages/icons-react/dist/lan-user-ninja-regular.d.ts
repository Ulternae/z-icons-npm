import React from 'react';

export interface LanUserNinjaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserNinjaRegular: React.FC<LanUserNinjaRegularProps>;
export default LanUserNinjaRegular;
