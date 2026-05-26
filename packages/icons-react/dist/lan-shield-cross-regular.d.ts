import React from 'react';

export interface LanShieldCrossRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldCrossRegular: React.FC<LanShieldCrossRegularProps>;
export default LanShieldCrossRegular;
