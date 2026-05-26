import React from 'react';

export interface LanCirclePhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePhone: React.FC<LanCirclePhoneProps>;
export default LanCirclePhone;
