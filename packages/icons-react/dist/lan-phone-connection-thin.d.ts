import React from 'react';

export interface LanPhoneConnectionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneConnectionThin: React.FC<LanPhoneConnectionThinProps>;
export default LanPhoneConnectionThin;
