import React from 'react';

export interface LanOtterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOtterRegular: React.FC<LanOtterRegularProps>;
export default LanOtterRegular;
