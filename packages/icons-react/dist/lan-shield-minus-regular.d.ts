import React from 'react';

export interface LanShieldMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldMinusRegular: React.FC<LanShieldMinusRegularProps>;
export default LanShieldMinusRegular;
