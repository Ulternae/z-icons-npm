import React from 'react';

export interface LanPhoneHangupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneHangup: React.FC<LanPhoneHangupProps>;
export default LanPhoneHangup;
