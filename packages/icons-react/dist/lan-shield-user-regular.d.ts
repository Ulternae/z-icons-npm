import React from 'react';

export interface LanShieldUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldUserRegular: React.FC<LanShieldUserRegularProps>;
export default LanShieldUserRegular;
