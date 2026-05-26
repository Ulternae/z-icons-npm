import React from 'react';

export interface LanOctagonPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonPlusThin: React.FC<LanOctagonPlusThinProps>;
export default LanOctagonPlusThin;
