import React from 'react';

export interface CorePhoneHangupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePhoneHangup: React.FC<CorePhoneHangupProps>;
export default CorePhoneHangup;
