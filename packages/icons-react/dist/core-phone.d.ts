import React from 'react';

export interface CorePhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePhone: React.FC<CorePhoneProps>;
export default CorePhone;
