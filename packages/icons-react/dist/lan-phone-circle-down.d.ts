import React from 'react';

export interface LanPhoneCircleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneCircleDown: React.FC<LanPhoneCircleDownProps>;
export default LanPhoneCircleDown;
