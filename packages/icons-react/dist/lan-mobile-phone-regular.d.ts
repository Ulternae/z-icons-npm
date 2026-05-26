import React from 'react';

export interface LanMobilePhoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobilePhoneRegular: React.FC<LanMobilePhoneRegularProps>;
export default LanMobilePhoneRegular;
