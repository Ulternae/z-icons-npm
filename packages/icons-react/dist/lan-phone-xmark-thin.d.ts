import React from 'react';

export interface LanPhoneXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneXmarkThin: React.FC<LanPhoneXmarkThinProps>;
export default LanPhoneXmarkThin;
