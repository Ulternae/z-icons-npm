import React from 'react';

export interface LanUserTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTimesRegular: React.FC<LanUserTimesRegularProps>;
export default LanUserTimesRegular;
