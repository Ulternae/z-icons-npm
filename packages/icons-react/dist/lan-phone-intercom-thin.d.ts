import React from 'react';

export interface LanPhoneIntercomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneIntercomThin: React.FC<LanPhoneIntercomThinProps>;
export default LanPhoneIntercomThin;
