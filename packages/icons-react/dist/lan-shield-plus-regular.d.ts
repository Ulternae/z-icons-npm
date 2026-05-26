import React from 'react';

export interface LanShieldPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldPlusRegular: React.FC<LanShieldPlusRegularProps>;
export default LanShieldPlusRegular;
