import React from 'react';

export interface LanPhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhone: React.FC<LanPhoneProps>;
export default LanPhone;
