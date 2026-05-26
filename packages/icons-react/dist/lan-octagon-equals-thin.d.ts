import React from 'react';

export interface LanOctagonEqualsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonEqualsThin: React.FC<LanOctagonEqualsThinProps>;
export default LanOctagonEqualsThin;
