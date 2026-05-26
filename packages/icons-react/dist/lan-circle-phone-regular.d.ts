import React from 'react';

export interface LanCirclePhoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePhoneRegular: React.FC<LanCirclePhoneRegularProps>;
export default LanCirclePhoneRegular;
