import React from 'react';

export interface LanShieldCatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldCatRegular: React.FC<LanShieldCatRegularProps>;
export default LanShieldCatRegular;
