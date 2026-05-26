import React from 'react';

export interface LanMobileButtonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileButtonRegular: React.FC<LanMobileButtonRegularProps>;
export default LanMobileButtonRegular;
