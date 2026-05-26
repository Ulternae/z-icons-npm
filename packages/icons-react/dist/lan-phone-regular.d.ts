import React from 'react';

export interface LanPhoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneRegular: React.FC<LanPhoneRegularProps>;
export default LanPhoneRegular;
