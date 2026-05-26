import React from 'react';

export interface LanShieldTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldTimesRegular: React.FC<LanShieldTimesRegularProps>;
export default LanShieldTimesRegular;
