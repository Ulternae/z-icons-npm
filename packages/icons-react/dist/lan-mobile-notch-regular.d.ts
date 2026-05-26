import React from 'react';

export interface LanMobileNotchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileNotchRegular: React.FC<LanMobileNotchRegularProps>;
export default LanMobileNotchRegular;
