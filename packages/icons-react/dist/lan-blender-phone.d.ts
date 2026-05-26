import React from 'react';

export interface LanBlenderPhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlenderPhone: React.FC<LanBlenderPhoneProps>;
export default LanBlenderPhone;
