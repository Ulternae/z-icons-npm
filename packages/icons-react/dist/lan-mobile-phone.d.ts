import React from 'react';

export interface LanMobilePhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobilePhone: React.FC<LanMobilePhoneProps>;
export default LanMobilePhone;
