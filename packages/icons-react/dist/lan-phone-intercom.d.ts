import React from 'react';

export interface LanPhoneIntercomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneIntercom: React.FC<LanPhoneIntercomProps>;
export default LanPhoneIntercom;
