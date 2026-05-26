import React from 'react';

export interface LanIntegralRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIntegralRegular: React.FC<LanIntegralRegularProps>;
export default LanIntegralRegular;
