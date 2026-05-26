import React from 'react';

export interface LanUserMessageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMessageThin: React.FC<LanUserMessageThinProps>;
export default LanUserMessageThin;
